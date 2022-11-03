import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export default function IconText({
  id,
  iconDef,
  text,
}: {
  id: string | undefined;
  iconDef: IconDefinition;
  text: string;
}) {
  return (
    <div id={id} className="flex flex-row py-2">
      <FontAwesomeIcon
        id={`${id}-icon`}
        className="text-grey px-2"
        size="1x"
        icon={iconDef}
      />
      <p id={`${id}-text`} className="text-base px-2 align-middle text-grey">
        {text}
      </p>
    </div>
  );
}
