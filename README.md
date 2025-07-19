This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

[**Live Demo**](https://mosaik.javascript.moe)  

## Getting Started

Clone the project.

Create a *.env* file and paste these variables:
```env
STRAPI_API=https://mosaik-cms-production.up.railway.app/api
NEXT_PUBLIC_STRAPI_BASE=https://mosaik-cms-production.up.railway.app
STRAPI_TOKEN=61914051cd1191eb556fa934ab7317c134551022d8f6d9412d7213ed3828ca7ee1896c08e0dd520a01d2702af2bcde243cce528449608c60e47f202f56ba824c550d6f8426c312e5e29651c61b9fa157274b88cc0beee8f06bd6c6d9e363acf9a5f9b7d5c6171e2c3d3bc47e0c2ec56d26bd09702ff55c911760deb46fa22ff5
```

Then, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

*Note:* If you want to wire up your a local CMS or extend CMS functionality, head over to [this project](https://github.com/SynTessera/mosaik-cms) and follow the instruction.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🧩 Mosaik — Build Sites from Themeable Components. Ship Static-Fast. Scale Forever.

**Mosaik** is an _edge-first_, _themeable_ framework built on **Next.js 15** — designed for sites that blend static speed with dynamic content from _any_ headless CMS.

✨ **Why Mosaik?**

-   **Compose Like Lego:** Every page is built from _themeable components_. No locked-in page builder — connect any headless CMS you prefer.
    
-   **Deploy Static, Update Live:** **ISR** and edge caching keep your site always fresh — and blazing fast.
    
-   **Theme Anything, Tree-Shake Everything:** Swap layouts & components at build or runtime — with **server-side theming** that’s fully **tree-shakable** for minimal bundle size.
    
-   **Pure State, Clear Effects:** Mosaik’s state system uses fully serializable reducers & effects — proven Redux/Saga ideas, modernized with React hooks.
    
-   **No Vendor Lock:** It’s just Next.js, your content, and your edge. No hidden runtime, no extra backend, no rent to pay.
    

🛠️ **Status:** Mosaik is **experimental** — it’s powering its own docs today (via Strapi on Railway). It’s small, open-source, and ready for your ideas. **PRs welcome!**

--------

## About this project

> ⚠️ **Disclaimer**
> Mosaik is **100% a work in progress** — currently an early-stage **proof of concept**.
> It’s just a small Next.js app exploring flexible theming, composable state, and modern data-driven rendering.
> **Anyone who wants to help is welcome to contribute!** Please feel free to open issues, share ideas, or create PRs — all collaboration is very welcome.

---

## 🧩 About Mosaik

**Mosaik** is a modern, opinionated frontend framework designed for building highly composable, themeable, and data-driven user interfaces — without sacrificing developer control or performance.

At its core, Mosaik helps you think of your application as a living **mosaic**: a dynamic arrangement of reusable, self-contained pieces — **slots**, **themes**, **actions**, and **data providers** — that adapt fluidly to your users’ needs, your design system, and your content sources.

----------

### ✨ **Why Mosaik?**

Today’s digital products demand more than static pages and brittle components. **Mosaik** is built for teams who want:

-   **Composability** — break your UI into isolated, discoverable slots and actions.
    
-   **Dynamic theming** — swap out slots and components at runtime or design time, without rewriting your logic.
    
-   **Data as a first-class citizen** — inject, transform, and consume structured data from multiple sources using intuitive, declarative providers.
    
-   **Isomorphic rendering** — render the same building blocks on the server for fast, SEO-friendly output, but hydrate them on the client for rich interactivity.
    
-   **Flexibility** — use Mosaik’s minimal conventions to shape your own design system, your own CMS backend, and your own rendering logic — no lock-in.
    

----------

### 🧩 **Key Concepts**

**✅ Slots**  
Every piece of UI is a slot: an isolated, replaceable area you can render with a themed component. Want to restyle your `Header`, `Sidebar`, or `ListItem`? Just swap the slot renderer.

**✅ Themes**  
Themes are structured maps of slots, tokens, and design rules. Mosaik’s theme system lets you dynamically switch components or styles based on user preferences, brand context, or device mode.

**✅ Actions**  
Actions describe the possible interactions in your app: they’re exposed by providers and consumed by views. This makes it trivial to conditionally render buttons, toggles, or menus based on your app’s state.

**✅ State Providers**  
Manage local or global app state using React’s modern `useReducer` pattern, with clear boundaries for server vs. client responsibilities.

**✅ Data Providers**  
Connect your views to any source: a headless CMS, an API, or static JSON. Providers abstract data fetching, shape-checking, and caching so your components stay clean and declarative.

----------

### 🔗 **Where Mosaik Fits**

**Mosaik** is not a new rendering engine — it’s a compositional layer that lives on top of **React** (and frameworks like **Next.js**). It embraces React Server Components and modern React patterns for hybrid static + dynamic rendering.

Whether you’re:

-   Building a marketing site with personalized sections,
    
-   Crafting a dashboard with dynamic widgets,
    
-   Or assembling a fully CMS-powered app that editors can reconfigure at runtime…
    

**Mosaik** gives you the primitives to scale it all elegantly — without rigid page builders or monolithic component trees.

----------

### 🚀 **Built for teams**

Mosaik works best when designers, developers, and content editors collaborate:

-   **Designers** define slots and themes.
    
-   **Developers** wire up state, actions, and data providers.
    
-   **Editors** feed structured content via your CMS of choice.
    

Everything stays decoupled — yet works seamlessly together.

----------

## 🗂️ **What’s next?**

-   Dive into **Mosail** by [running the project locally](https://mosaik.javascript.moe/mosaik/run-the-docs-locally)
-   Discover [best practices](https://mosaik.javascript.moe/mosaik/key-principles) for mixing **server-side rendering** with **client-side interactivity**.
-   ~~Learn how to wire up a **headless CMS**.~~*(wip)*
-   ~~See advanced examples of how to override, merge, and reuse slots across different contexts.~~ *(wip)*
    

----------

## 🧩 **Mosaik** — your UI, piece by piece.