"use client";

import { useAppState } from "@/context/StateContext";
import { Action } from "@/types/Action";

const useDispatch = (action: Action<string, string, object>) => {
  const { dispatch } = useAppState();

  return () => dispatch(action);
};

export default useDispatch;
