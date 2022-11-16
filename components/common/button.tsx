export default function Button({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div className="bg-dark-green hover:bg-green text-white py-2 px-4 rounded-xl shadow-lg">
      <button className="w-full">{children}</button>
    </div>
  );
}
