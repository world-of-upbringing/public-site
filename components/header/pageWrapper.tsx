import Footer from "../footer/footer";
import Header from "./header";
import MetaHead from "./metaHead";

export default function PageWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="bg-background flex flex-col">
      <MetaHead />
      <Header />
      <div id="body">{children}</div>
      <Footer />
    </div>
  );
}
