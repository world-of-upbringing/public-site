import GetToKnowUs from "./get_to_know_us";
import Hero from "./hero";
import Patrons from "./patrons";

export default function Body() {
  return (
    <section id="home" className="flex flex-col">
      <section id="hero" className="flex h-screen">
        <Hero />
      </section>
      <section id="get-to-know-us" className="flex">
        <GetToKnowUs />
      </section>
      <section id="patrons" className="flex">
        <Patrons />
      </section>
    </section>
  );
}
