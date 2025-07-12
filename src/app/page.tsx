import { Content } from "@/components/Content";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Desktop } from "@/modules/Desktop";
import * as light from "@/themes/light/index";

const {settings, ...components} = light;

export default function Home() {
  return (
    <div className="">
      <ThemeProvider theme={{components, settings}}>
        <Desktop>
          <Sidebar></Sidebar>
          <Content></Content>
        </Desktop>
      </ThemeProvider>
    </div>
  );
}
