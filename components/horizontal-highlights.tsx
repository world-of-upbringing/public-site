import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import IconText from "./icon_text";

export default function HorizontalHighlights({
  icons,
  texts,
}: {
  icons: IconDefinition[];
  texts: string[];
}) {
  const buffer = [];

  for (let i = 0; i < icons.length; i++) {
    const childBuffer = [];
    childBuffer.push(
      <hr id={`${texts[i]}-hr`} className="w-full h-2 bg-light-grey" />
    );
    childBuffer.push(
      <IconText id={`${texts[i]}-icon`} iconDef={icons[i]} text={texts[i]} />
    );
    buffer.push(
      <div id={`${texts[i]}-div`} className="flex flex-col w-64 p-5">
        {childBuffer}
      </div>
    );
  }

  return <div className="flex flex-wrap py-12 px-3 mx-auto">{buffer}</div>;
}
