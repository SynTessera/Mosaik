export const syncCollapsedState = ({ state }: any) => {
  const url = new URL(window.location.href);
  url.searchParams.set("sidebarExpanded", state?.sidebar?.expanded.toString());
  if (window.location.href !== url.href) window.location.href = url.href;
};
