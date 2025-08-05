import components from "@/themes/components";

export const getAlias = (alias: string) => {
    return components[alias] || null;
}