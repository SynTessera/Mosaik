// @todo: Type this correctly!
import { useEffect } from "react";
export const useOnClickOutside = (ref, handler, active = true, event = "mouseup") => {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return true;
            }
            if (active) {
                return handler(event);
            }
            return true;
        };
        if (active) {
            document.addEventListener(event, listener);
        }
        return () => {
            if (active) {
                document.removeEventListener(event, listener);
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
    [ref, handler, active]);
};
export default useOnClickOutside;
