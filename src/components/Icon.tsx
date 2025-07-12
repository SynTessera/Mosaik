"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as FontAwesome from "react-icons/fa";
import * as MUI from "react-icons/md";
import * as LU from "react-icons/lu";
import * as FA7 from "react-icons/fa6";
import * as CG from "react-icons/cg";
import * as TB from "react-icons/tb";
import * as GI from "react-icons/gi";
import * as IO5 from "react-icons/io5";
import * as IO from "react-icons/io";
import * as GR from "react-icons/gr";
import clsx from "clsx";

export const Icon = ({
  icon,
  tooltip,
  id,
  children,
  containerClsn,
  ...rest
}: React.PropsWithChildren<{
  icon: string;
  tooltip?: string;
  id?: string;
  className?: string;
  containerClsn?: string;
}>) => {
  const Cmp =
    (FontAwesome as any)[icon] ||
    (FA7 as any)[icon] ||
    (MUI as any)[icon] ||
    (LU as any)[icon] ||
    (CG as any)[icon] ||
    (TB as any)[icon] ||
    (GI as any)[icon] ||
    (IO5 as any)[icon] ||
    (IO as any)[icon] ||
    (GR as any)[icon] ||
    MUI.MdQuestionMark;

  // const body = useBody();
  return (
    <>
      <span
        className={clsx(
          "relative h-fit w-fit flex justify-center items-center",
          containerClsn
        )}
        id={id}
      >
        <Cmp color="inherit" {...rest} />
        <span className="absolute">{children}</span>
      </span>
      {/* {body &&
        ReactDOM.createPortal(
          <Tooltip anchorSelect={"#" + id} children={tooltip} id={id} />,
          body
        )} */}
    </>
  );
};
