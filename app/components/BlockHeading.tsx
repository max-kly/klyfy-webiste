export default function BlockHeading({
  heading,
  subheading,
}: {
  heading: React.ReactNode;
  subheading?: string;
}) {
  return (
    <>
      {heading}
      {subheading ? <p className="subheading">{subheading}</p> : null}
    </>
  );
}
