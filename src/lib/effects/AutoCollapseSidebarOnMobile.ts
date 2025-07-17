import { collapse } from "@/app/mosaik/actions";


const autoCollapseSidebarOnMobile = ({ dispatch }: any) => {
  if (window.innerWidth <= 425) {
    dispatch(collapse());
  }
};

export default autoCollapseSidebarOnMobile;
