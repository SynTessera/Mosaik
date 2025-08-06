import { themeRegistry } from '../themes/registry';
import type { SlotConfig, ThemeConfig } from '@/types/ThemeConfig';
import { ComponentRegistry } from '../components/registry';
import { ActionRegistry } from '../actions/registry';

export function generateSlots(theme: string) {
  const slots: Record<string, SlotConfig> = {};
  const themeConfig = themeRegistry.getTheme(theme);

  if (!themeConfig) {
    throw new Error(`Theme ${theme} not found during slot generation`);
  }

  // Generate static slot configurations for both desktop and mobile
  Object.entries(themeConfig.layout.slots).forEach(([layoutType, layoutConfig]) => {
    Object.entries(layoutConfig.slots).forEach(([slotName, config]) => {
      slots[`${layoutType}_${slotName}`] = {
        ...config,
        className: resolveClassName(config.className),
        component: resolveComponent(config.component),
        actions: config.actions ? resolveActions(config.actions, theme) : undefined
      };
    });
  });

  return slots;
}

function resolveClassName(className: string | undefined) {
  if (!className) return undefined;
  
  // Handle dynamic class names (e.g. with variables or conditions)
  return className.replace(/\${([^}]+)}/g, (_, variable) => {
    // Add logic to resolve variables if needed
    return variable;
  });
}

function resolveComponent(component: string) {
  // Verify component exists in registry
  if (!ComponentRegistry.has(component)) {
    throw new Error(`Component ${component} not found in registry`);
  }
  return component;
}

function resolveActions(actions: string[] | undefined, theme: string) {
  if (!actions) return undefined;
  
  return actions.map(actionName => {
    const actionConfig = ActionRegistry.get(actionName, theme);
    if (!actionConfig) {
      throw new Error(`Action ${actionName} not found in theme ${theme}`);
    }

    return {
      ...actionConfig,
      // Serialize handler safely
      handler: serializeHandler(actionConfig.handler)
    };
  });
}

function serializeHandler(handler: Function) {
  try {
    // Remove any bound context and convert to string
    const handlerString = handler.toString();
    // Remove potential unsafe content
    return sanitizeHandler(handlerString);
  } catch (error) {
    console.error('Failed to serialize handler:', error);
    return '() => {}';
  }
}

function sanitizeHandler(handlerString: string) {
  // Remove any potentially unsafe content
  return handlerString
    .replace(/process\.env/g, 'undefined')
    .replace(/require/g, 'undefined')
    .replace(/import/g, 'undefined');
}