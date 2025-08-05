export const Section = (props: any) => {
  const {
    children,
    content: { anchorId },
  } = props;
  return (
    <div className="bg-digitas" id={anchorId}>
      {children}
    </div>
  );
};
