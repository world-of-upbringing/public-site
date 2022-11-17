import Footer from "../footer/footer";
import Header from "./header";
import MetaHead from "./metaHead";

export default function PageWrapper({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <MetaHead title={title} />
      <div className="min-h-screen w-screen text-base text-light-grey bg-white">
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}
