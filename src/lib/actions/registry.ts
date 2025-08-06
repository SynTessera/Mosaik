import { ActionConfig } from '@/types/ActionConfig';

export class ActionRegistry {
  private static actions = new Map<string, Map<string, ActionConfig>>();

  static register(theme: string, name: string, config: ActionConfig) {
    if (!ActionRegistry.actions.has(theme)) {
      ActionRegistry.actions.set(theme, new Map());
    }
    ActionRegistry.actions.get(theme)?.set(name, config);
  }

  static get(name: string, theme: string): ActionConfig | undefined {
    return ActionRegistry.actions.get(theme)?.get(name);
  }
}