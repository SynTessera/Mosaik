import { settings } from "@/themes";
import { cookies } from "next/headers";

export async function getServerUiState() {
  const cookieStore = await cookies();
  const value = cookieStore.get("uiState"+settings?.theme)?.value;

  return value ? JSON.parse(value) : null;
}
