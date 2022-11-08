import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Card({
  title,
  description,
  cta,
  link,
  date,
  feature,
}: {
  title: string;
  description: string;
  cta: string;
  link: string;
  date: string;
  feature: string;
}) {
  return (
    <div className="flex justify-center">
      <div className=" w-80 h-64 block rounded-lg shadow-lg bg-white max-w-sm text-center overflow-x-scroll">
        <div className="p-6">
          <div className="text-primary py-3 px-6 border-b border-gray-300">
            {date}
            <Link href={link}>
              <Button>{cta}</Button>
            </Link>
          </div>
          <h5 className="text-gray-900 text-highlight text-xl font-medium mb-2">
            {title}
          </h5>
          <p className="text-gray-700 text-primary text-base mb-4">
            {description}
          </p>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600"></div>
      </div>
    </div>
  );
}
