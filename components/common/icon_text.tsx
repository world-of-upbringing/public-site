import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { ReactNode } from "react";

function _getLink(url: string, children: ReactNode) {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
}

export default function IconText({
  iconDef,
  text,
  url,
}: {
  iconDef: IconProp;
  text: string;
  url?: string;
}) {
  const body = (
    <div className="flex flex-row py-2">
      <FontAwesomeIcon className="px-2" size="1x" icon={iconDef} />

      <p className="text-base px-2 align-middle">{text}</p>
    </div>
  );

  return url ? _getLink(url, body) : body;
}
