import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";
import { isLocale, localeCookie } from "./locale";

export const getLocale = cache(async () => {
  const value = (await cookies()).get(localeCookie)?.value;
  return isLocale(value) ? value : "en";
});
