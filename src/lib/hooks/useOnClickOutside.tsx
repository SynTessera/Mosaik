import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (e: React.MouseEvent) => void,
  active = true,
  event = "mouseup"
) => {
  useEffect(
    () => {
      const listener = (event: React.MouseEvent) => {
        // Do nothing if clicking ref's element or descendent elements

        if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
          return true;
        }
        if (active) {
          return handler(event);
        }
        return true;
      };

      if (active) {
        document.addEventListener(event, listener as any);
      }

      return () => {
        if (active) {
          document.removeEventListener(event, listener as any);
        }
      };
    },

    /*
     * Add ref and handler to effect dependencies
     * It's worth noting that because passed in handler is a new ...
     * ... function on every render that will cause this effect ...
     * ... callback/cleanup to run every render. It's not a big deal ...
     * ... but to optimize you can wrap handler in useCallback before ...
     * ... passing it into this hook.
     */
    [ref.current, handler, active]
  );
};
