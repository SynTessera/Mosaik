import clsx from "clsx";

export const Spacer = ({ spacing }: any) => {
  return (
    <div
      className={clsx("bg-digitas", {
        "py-[0.5rem]": spacing === 1,
        "py-[1rem]": spacing === 2,
        "py-[1.5rem]": spacing === 3,
        "py-[2rem]": spacing === 4,
        "py-[2.5rem]": spacing === 5,
        "py-[3rem]": spacing === 6,
        "py-[3.5rem]": spacing === 7,
        "py-[4rem]": spacing === 8,
      })}
    />
  );
};
