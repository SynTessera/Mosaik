import { ThemeConfig } from '@/types/ThemeConfig';
import { defaultTheme } from '@/themes/default/index'

class ThemeRegistry {
  private themes: Map<string, ThemeConfig> = new Map();

  constructor() {
    // Register default theme during initialization
    this.register('default', defaultTheme);
  }

  register(name: string, config: ThemeConfig) {
    if (typeof window !== 'undefined') {
      throw new Error('Themes can only be registered during build time');
    }
    this.themes.set(name, config);
  }

  getTheme(name: string) {
    return this.themes.get(name) || this.themes.get('default');
  }

  getSlotConfig(themeName: string, slotPath: string) {
    const theme = this.getTheme(themeName);
    if (!theme) {
      throw new Error(`Theme ${themeName} not found`);
    }
    return this.getNestedValue(theme, slotPath);
  }

  private getNestedValue(obj: any, path: string) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
  }
}

export const themeRegistry = new ThemeRegistry();