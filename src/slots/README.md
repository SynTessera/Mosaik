# @/slots/ Folder

```
@/slots/
├── getDesktopSlots.tsx
├── getSectionSlots.tsx
├── get<Block/Module>Slots.tsx
```

You can name the file and function as you want, but it should start with *get* and end with *Slots*, it's also helpful to include the namespace / component / block 
this function is used for. This probably needs a clearer convention.

---

## Overview

The `@/slots/` directory contains logic for defining **server-rendered slot layouts** used across Mosaik applications. These slots provide a clean abstraction for laying out block-based UIs like sidebars, headers, footers, and dynamic content regions — all rendered on the server while preserving full flexibility and composition.

> 📚 **More on this pattern**:  
> [Slots, Blocks, and Components in Mosaik](https://mosaik.javascript.moe/mosaik/slots-blocks-and-components)

---

## ✨ Motivation

Mosaik aims to build fully server-rendered, modular UIs with:
- Reusable layout components (called *blocks*)
- Flexible injection points (called *slots*)
- Dynamic behavior, but **with server-first rendering**

However, if slots were defined only in client components, the entire system would fall back to **CSR (Client-Side Rendering)**. To avoid this, we define all slots as **functions that return a slot map on the server**. This allows us to pre-render layouts with injected content — before hydration — while still supporting dynamic behavior later on the client.

---

## 📦 What's in this folder?

### `getDesktopSlots.tsx`

- Composes the layout for **desktop screens**
- Injects blocks like `ActionBar`, `DesktopHeader`, `SidebarContent`, `DesktopFooter`
- Uses `Slot` + `getSectionSlots` to dynamically include page-specific navigation

### `getPageSlots.tsx`

- (Typically) used for composing a layout with less chrome (e.g., for mobile or standalone pages)
- Returns layout slots like header, footer, main content
- Similar to `getDesktopSlots` but lighter weight

### `getSectionSlots.tsx`

- A utility used inside both desktop/page layouts
- Returns a `{ navigation }` slot block based on route + section
- Allows injecting custom `AppNavigation` based on section context

---

## ✅ What Goes in Here?

- Server-side `getXSlots()` functions
- Each function returns an object of React elements keyed by slot name
- Use these on the server to **inject content** into reusable page layout templates

---

## 💡 When to Add a New File

Create a new slot function when:
- You need a **custom layout** for a route or screen
- You want to inject **different blocks or content** per page type
- You want to decouple slot logic from layout rendering

---

## 🔁 Related Concepts

- [Blocks](https://mosaik.javascript.moe/mosaik/slots-blocks-and-components)
- [Hybrid Rendering](https://mosaik.javascript.moe/mosaik/hybrid-component-architecture)