import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faGlobe,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import * as gtag from "../../lib/ga/gtag";

export type CallbackFunction = () => void;

export default function Card({
  title,
  subtitle,
  duration,
  description,
  amount,
  lang,
  link,
  date,
  isExpanded,
  onClick,
}: {
  title: string;
  subtitle?: string;
  duration: number;
  description: string;
  amount: string;
  lang: string;
  link: string;
  date: string;
  isExpanded: boolean;
  onClick: CallbackFunction;
}) {
  return (
    <div className="flex flex-col w-full shadow-md rounded-2xl bg-white bg-gradient-to-b from-green/75 to-white/75">
      <div className="mx-4 mt-3">
        <p className="text-dark-green text-base text-center uppercase">
          {title}
        </p>
      </div>

      {subtitle && (
        <div className="mx-4 mt-1">
          <p className="text-dark-green text-sm font-light text-center uppercase">
            {subtitle}
          </p>
        </div>
      )}

      <div className="flex flex-row mx-1 mt-3">
        <FontAwesomeIcon
          className="text-dark-green px-2"
          size="1x"
          icon={faClock}
        />
        <p className="text-dark-green text-xs font-extralight">
          {duration.toString() + " hours"}
        </p>
      </div>

      <div className="flex flex-row mx-1 mt-3">
        <FontAwesomeIcon
          className="text-dark-green px-2"
          size="1x"
          icon={faCalendar}
        />
        <p className="text-dark-green text-xs font-extralight">{date}</p>
      </div>

      <div className="flex flex-row mx-1 mt-3">
        <FontAwesomeIcon
          className="text-dark-green px-2"
          size="1x"
          icon={faRupeeSign}
        />
        <p className="text-dark-green text-xs font-extralight">{amount}</p>
      </div>

      <div className="flex flex-row mx-1 mt-3">
        <FontAwesomeIcon
          className="text-dark-green px-2"
          size="1x"
          icon={faGlobe}
        />
        <p className="text-dark-green text-xs font-extralight">{lang}</p>
      </div>
      {isExpanded && (
        <div className="mt-2 px-2">
          <p className="text-dark-green text-xs font-extralight">
            {description}
          </p>
        </div>
      )}

      <div className="flex flex-row mx-1 pt-6 mt-auto mb-2">
        {!isExpanded && (
          <div className="w-28 mx-auto text-xs">
            <Button onClick={() => onClick()}>Details</Button>
          </div>
        )}
        <div className="w-28 mx-auto text-xs">
          <Link
            href={{
              pathname: "/payment",
              query: {
                url: link,
                mode: "workshop",
              },
            }}
          >
            <a
              onClick={() =>
                gtag.event({
                  action: "click",
                  category: "general",
                  label: link,
                  value: 1,
                })
              }
            >
              <Button>Register now</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
