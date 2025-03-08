export {};

// lib/global.d.ts
// No imports or exports here
declare global {
  namespace JSX {
    interface Element extends React.JSX.Element {}
  }
}
