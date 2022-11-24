import Testimonial, { ITestimonial } from "./testimonial";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: ITestimonial[];
}) {
  const buffer = [];
  for (const testi of testimonials) {
    buffer.push(
      <Testimonial
        key={JSON.stringify(testi)}
        isActive={testi.isActive}
        img={testi.image}
        persona={testi.persona}
        demographic={testi.demographic}
        numStars={testi.numStars}
      >
        {testi.testimonial}
      </Testimonial>
    );
  }
  return (
    <section className="mb-32 text-white text-center">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          {buffer}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
