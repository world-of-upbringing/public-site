import FrontPageSection from "../../components/front-page-section";
import TestimonialCarousel from "../../components/testimonial-carousel";

export default function Patrons() {
  return (
    <FrontPageSection
      title="Patrons of World of Upbringing"
      description=""
      backgroundColor={true}
    >
      <TestimonialCarousel
        testimonials={[
          {
            isActive: true,
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
            persona: "House wife",
            demographic: "Chennai, TN",
            numStars: 5,
            testimonial:
              "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium condimentum nulla.",
          },
          {
            isActive: false,
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
            persona: "Software Developer",
            demographic: "Bengaluru, KA",
            numStars: 4,
            testimonial:
              "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eudui aliquam, faucibus metus quis, elementum nunc",
          },
          {
            isActive: false,
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
            persona: "Designer",
            demographic: "Mumbai, MH",
            numStars: 3,
            testimonial:
              "Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc zigula felis, sagittis eget nisi vitae",
          },
        ]}
      />
    </FrontPageSection>
  );
}
