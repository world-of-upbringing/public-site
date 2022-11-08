export default function Button({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <button className="bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}
