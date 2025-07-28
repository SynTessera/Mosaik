export type SeperatorProps = {
  className?: string;
};

export const Seperator = ({ className }: SeperatorProps) => (
  <hr className={className} />
);
