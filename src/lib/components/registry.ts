import { ComponentConfig } from '@/types/ComponentConfig';

export class ComponentRegistry {
  private static components = new Map<string, ComponentConfig>();

  static register(name: string, config: ComponentConfig) {
    ComponentRegistry.components.set(name, config);
  }

  static has(name: string): boolean {
    return ComponentRegistry.components.has(name);
  }

  static get(name: string): ComponentConfig | undefined {
    return ComponentRegistry.components.get(name);
  }
}