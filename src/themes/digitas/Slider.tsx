import { HeroTextHeadline } from "./HeroTextHeadline";

export const Slider = ({ children, headline }: any) => {
  return (
    <div className="bg-digitas gap-1 w-full h-full pb-8 pt-[7rem]">
      <HeroTextHeadline children={headline} className="!pb-8" />
      {children}
    </div>
  );
};
