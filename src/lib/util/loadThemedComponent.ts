// src/lib/themeLoader.ts
const context = (require as any).context("@/themes", true, /\.tsx$/);

export async function loadThemedComponent(theme: string, slot: string) {
  const paths = context.keys();

  // Try to find a matching path like ./light/DesktopSidebar.tsx
  const path = paths.find((p: string) => p === `./${theme}/${slot}.tsx`);

  if (!path) {
    console.warn(`Component not found: ${theme}/${slot}`);
    return null;
  }

  const mod = await context(path);
  return mod[slot] || mod.default;
}
