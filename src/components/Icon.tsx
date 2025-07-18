import clsx from "clsx";
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

export type IconNames = keyof typeof Icons; 
export const Icon = ({icon,className}: {icon:keyof typeof Icons, className?: string}) => {
  const Icn = (Icons as any)[icon] ;
  if (!Icn) return <div className={clsx(icon,className)} />
  return <Icn className={className}/>
}