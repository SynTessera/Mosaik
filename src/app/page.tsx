import { Content } from "@/components/Content";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Desktop } from "@/modules/Desktop";
import * as light from "@/themes/light/index";

export default function Home() {
  console.log ("THEME", light)
  return (
    <div className="">
      <ThemeProvider theme={light}>
        <Desktop>
          <Sidebar></Sidebar>
          <Content></Content>
        </Desktop>
      </ThemeProvider>
    </div>
  );
}
