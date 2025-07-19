import { cookies } from "next/headers";

export async function getServerUiState() {
  const cookieStore = await cookies();
  const value = cookieStore.get("uiState")?.value;

  return value ? JSON.parse(value) : null;
}
