import { useEffect, useState } from "react";
import FrontPageSection from "./frontPageSection";
import { ITestimonial } from "./testimonial";
import TestimonialCarousel from "./testimonialCarousel";

export default function Patrons() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/.netlify/functions/get-testimonials")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (data == null || data == undefined) return <></>;

  const testimonials: ITestimonial[] = [];
  for (const val of data as []) {
    console.log(val);
    testimonials.push({
      isActive: false,
      persona: val["persona"],
      demographic: val["demographic"],
      numStars: Number(val["numStars"]),
      image: val["img"],
      testimonial: val["testimonial"],
    });
  }
  testimonials[0].isActive = true;

  return (
    <FrontPageSection
      title="Patrons of World of Upbringing"
      description=""
      backgroundColor={true}
    >
      <TestimonialCarousel testimonials={testimonials} />
    </FrontPageSection>
  );
}