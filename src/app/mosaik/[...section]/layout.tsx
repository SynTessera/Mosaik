import { App } from "@/modules/App";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "@/app/mosaik/reducers";
import { initialState } from "@/app/mosaik/state";

export default async function SectionLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ section: string[] }>;
}) {
  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <App slug="/mosaik">{children}</App>
    </StateProvider>
  );
}
