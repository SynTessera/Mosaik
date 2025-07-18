// Pure Server Component (NO "use client")
import { MdQuestionMark } from "react-icons/md";

const iconSets = {
  fa: () => import("react-icons/fa"),
  fa6: () => import("react-icons/fa6"),
  md: () => import("react-icons/md"),
  lu: () => import("react-icons/lu"),
  cg: () => import("react-icons/cg"),
  tb: () => import("react-icons/tb"),
  gi: () => import("react-icons/gi"),
  io5: () => import("react-icons/io5"),
  io: () => import("react-icons/io"),
  gr: () => import("react-icons/gr"),
};

function parseIconName(iconName: string) {
  const prefixes = Object.keys(iconSets).sort((a, b) => b.length - a.length);
  for (const prefix of prefixes) {
    if (iconName.toLowerCase().startsWith(prefix)) {
      return { prefix, iconKey: iconName };
    }
  }
  return null;
}

export async function Icon({ icon, ...props }: { icon: string; [key: string]: any }) {
  const parsed = parseIconName(icon);

  if (!parsed) return <MdQuestionMark {...props} />;

  const { prefix, iconKey } = parsed;

  try {
    const icons = await iconSets[prefix]();
    const IconComponent = icons[iconKey] ?? MdQuestionMark;
    return <IconComponent {...props} />;
  } catch {
    return <MdQuestionMark {...props} />;
  }
}
