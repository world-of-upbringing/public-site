import Footer from "../footer/footer";
import Header from "./header";
import MetaHead from "./metaHead";

export default function PageWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <MetaHead />
      <div className="min-h-screen w-screen text-base text-light-grey bg-white">
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}
