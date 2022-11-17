export default function Container({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="mx-auto px-4 md:w-768 lg:w-1024 xl:w-1280 2xl:w-1536">
      {children}
    </div>
  );
}
