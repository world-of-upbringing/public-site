import GetToKnowUs from "./getToKnowUs";
import Hero from "./hero";
import Patrons from "./patrons";
import Services from "./services";
import Workshops from "./workshops";

export default function HomePageBody() {
  return (
    <div className="flex flex-col">
      <section id="hero" className="flex h-screen">
        <Hero />
      </section>
      <section id="get-to-know-us" className="flex">
        <GetToKnowUs />
      </section>
      <section id="patrons" className="flex">
        <Patrons />
      </section>
      <section id="services" className="flex">
        <Services />
      </section>
      <section id="workshops" className="flex">
        <Workshops />
      </section>
    </div>
  );
}
