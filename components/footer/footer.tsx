import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconText from "../common/icon_text";
import { H4 } from "../common/wouH";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export default function Footer() {
  return (
    <div id="footer" className="flex bg-light-grey text-white mt-3">
      <div className="mx-auto">
        <div className="text-center">
          <H4>Contact Us</H4>
        </div>

        <div className="flex flex-row place-content-center">
          <IconText
            iconDef={faPhone}
            text={"(+91) 797 595 8943"}
            url="tel:+917975958943"
          />
        </div>

        <div className="flex flex-row place-content-center">
          <IconText
            iconDef={faEnvelope}
            text={"ila@worldofupbringing.com"}
            url="mailto:ila@worldofupbringing.com"
          />
        </div>

        <div className="flex flex-row my-3 place-content-center">
          <Link href="https://api.whatsapp.com/send?phone=7975958943">
            <a>
              <FontAwesomeIcon
                className="px-2 mx-auto"
                size="2x"
                icon={faWhatsapp as IconProp}
              />
            </a>
          </Link>

          <Link href="https://www.instagram.com/worldupbringing/">
            <a>
              <FontAwesomeIcon
                className="px-2 mx-auto"
                size="2x"
                icon={faInstagram as IconProp}
              />
            </a>
          </Link>

          <Link href="https://www.facebook.com/worldofupbringing/">
            <a>
              <FontAwesomeIcon
                className="px-2 mx-auto"
                size="2x"
                icon={faFacebook as IconProp}
              />
            </a>
          </Link>

          <Link href="https://www.youtube.com/channel/UCsv4oHXmwMCTEVTrZEanaHQ">
            <a>
              <FontAwesomeIcon
                className="px-2 mx-auto"
                size="2x"
                icon={faYoutube as IconProp}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
