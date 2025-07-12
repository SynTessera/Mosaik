"use client"

import actions, { payloads } from "@/app/mosaik/actions";
import { useAppState } from "@/context/StateContext";

const useAction = <T extends keyof typeof actions>(
  type: T,
  payload: payloads[T]
) => {
  const { dispatch } = useAppState();

  return () => dispatch({ type: type, payload });
};

export default useAction;
