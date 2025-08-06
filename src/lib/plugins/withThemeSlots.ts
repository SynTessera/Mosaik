import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig } from 'webpack';
import webpack from 'webpack';
import { generateSlots } from '../slots/generateSlots';
import { themeRegistry } from '../themes/registry';
import { defaultTheme } from '@/themes/default';

interface WithThemeSlotsConfig extends NextConfig {
  webpack?: (config: WebpackConfig, options: any) => WebpackConfig;
  themes?: string[];
}

export function withThemeSlots(nextConfig: WithThemeSlotsConfig = {}) {
  // Register themes during initialization
  if (typeof window === 'undefined') {
    themeRegistry.register('default', defaultTheme);
    // Register additional themes here if needed
  }

  return {
    ...nextConfig,
    webpack(config: WebpackConfig, options: any) {
      const themes = nextConfig.themes || ['default'];
      const generatedSlots: Record<string, ReturnType<typeof generateSlots>> = {};

      // Verify themes are registered
      themes.forEach(theme => {
        if (!themeRegistry.getTheme(theme)) {
          throw new Error(`Theme "${theme}" must be registered before generating slots`);
        }
      });

      // Generate slots for all themes
      themes.forEach(theme => {
        try {
          generatedSlots[theme] = generateSlots(theme);
        } catch (error) {
          console.error(`Failed to generate slots for theme "${theme}":`, error);
          throw error;
        }
      });

      // Add the generated slots to webpack's define plugin
      config.plugins = config.plugins || [];
      config.plugins.push(
        new webpack.DefinePlugin({
          '__GENERATED_SLOTS__': JSON.stringify(generatedSlots)
        })
      );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  };
}