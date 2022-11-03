import Image from "next/image";
import Rating from "./rating";

export interface ITestimonial {
  isActive: boolean;
  image: string;
  persona: string;
  demographic: string;
  numStars: number;
  testimonial: string;
}

export default function Testimonial({
  isActive,
  img,
  persona,
  demographic,
  numStars,
  children,
}: {
  isActive: boolean;
  img: string;
  persona: string;
  demographic: string;
  numStars: number;
  children: JSX.Element | string;
}) {
  return (
    <div
      className={
        isActive
          ? "carousel-item active relative float-left w-full"
          : "carousel-item relative float-left w-full"
      }
    >
      <Image
        className="rounded-full shadow-lg mb-6 mx-auto"
        src={img}
        alt="avatar"
        width="120px"
        height="120px"
      />
      <div className="flex flex-wrap justify-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
          <h5 className="text-lg font-bold mb-3">{persona}</h5>
          <p className="font-medium text-gray-700 mb-4">{demographic}</p>
          <p className="text-gray-500 mb-6">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {children}
          </p>
          <Rating numStars={numStars} />
        </div>
      </div>
    </div>
  );
}
