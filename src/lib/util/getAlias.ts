import { components } from "@/themes/mappings";

export const getAlias = (alias: string) => {
    return components[alias] || null;
}