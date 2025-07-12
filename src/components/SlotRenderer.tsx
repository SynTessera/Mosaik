import React from "react";

export const SlotRenderer = ({ slotKey }: any) =>
  React.lazy(() =>
    import(`@/themes/light/${slotKey}.tsx`).then((mod) => ({
      default: mod[slotKey],
    }))
  );
