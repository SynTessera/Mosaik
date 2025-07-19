import { collapse } from "@/app/mosaik/actions";


export const autoCollapseSidebarOnMobile = ({ dispatch }: any) => {
  if (window.innerWidth <= 425) {
    dispatch(collapse());
  }
};

