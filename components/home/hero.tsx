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
              <span>Nurturing Values</span>
            </h2>
            <div className="flex flex-row">
              <div className="mx-auto">
                <Link href="/consultations">
                  <button
                    type="button"
                    className="inline-block px-3 py-3 bg-dark-green text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    1-1 Consultation
                  </button>
                </Link>
              </div>
              <div className="mx-auto">
                <Link href="/workshops">
                  <button
                    type="button"
                    className="inline-block px-3 py-3 bg-dark-green text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Workshops
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
