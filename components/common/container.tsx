export default function Container({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="mx-auto px-4 md:w-750 lg:w-1000 xl:w-1200">{children}</div>
  );
}
