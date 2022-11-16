export default function Button({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div className="bg-dark-green hover:bg-green text-white py-2 px-4 rounded-xl shadow-lg">
      {onClick ? (
        <button onClick={() => onClick()} className="w-full">
          {children}
        </button>
      ) : (
        <button className="w-full">{children}</button>
      )}
    </div>
  );
}
