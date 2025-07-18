import { FaServer,FaChevronLeft, FaChevronRight, FaInfo, FaCircleNotch, FaLightbulb, FaRoute, FaBlog, FaGithub} from "react-icons/fa";
import { FaCheckToSlot, FaMagnifyingGlass } from "react-icons/fa6";


const Icons = {
  FaServer,
  FaCheckToSlot,
  FaChevronRight,
  FaChevronLeft,
  FaInfo,
  FaCircleNotch,
  FaLightbulb,
  FaRoute,
  FaMagnifyingGlass,
  FaBlog,
  FaGithub
}

export const Icon = ({icon}: {icon:keyof typeof Icons}) => {
  const Icn = (Icons as any)[icon] ;
  if (!Icn) return <div className={icon} />
  return <Icn />
}