"use client";

import { useEffect, useState } from "react";

export function useBody(): HTMLBodyElement | null {
  let [body, setBody] = useState<HTMLBodyElement | null>(null);
  
  useEffect(() => {
    setBody(document.body as HTMLBodyElement);
  }, []);

  return body;
}
