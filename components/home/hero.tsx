import Link from "next/link";
import bg from "../../public/images/hero.webp";

export default function Hero() {
  return (
    <div className="h-full">
      <div
        className="flex-auto absolute w-full h-full overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="flex-auto absolute w-full h-full overflow-hidden">
        <div className="flex justify-center w-full h-full items-center">
          <div className="text-center text-white px-6 md:px-12">
            <h2 className="text-5xl font-bold tracking-tight leading-tight mb-12">
              World of Upbringing <br />
              <span>Nurturing Lives</span>
            </h2>
            <Link
              href={{
                pathname: "/payment",
                query: {
                  url: "https://test.instamojo.com/@mini_asthana/lc869424fd335422d91b8625989a96361/",
                  mode: "consultation",
                },
              }}
            >
              <button
                type="button"
                className="inline-block px-7 py-3 bg-highlight text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}