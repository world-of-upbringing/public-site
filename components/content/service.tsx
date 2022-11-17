import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface IService {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function Service({
  id,
  service,
}: {
  id: string;
  service: IService;
}) {
  return (
    <div className="px-4 mt-10 mx-auto md:w-1/3 inline-block float-none align-top">
      <div className="w-full">
        <div className="text-4xl mb-2 w-full text-center">
          <FontAwesomeIcon
            id={`${id}-icon`}
            className="text-grey px-2"
            size="1x"
            icon={service.icon}
          />
        </div>

        <div className="mb-5 w-full">
          <h5 className="font-bold text-2xl leading-8 text-center">
            {service.title}
          </h5>
        </div>

        <div className="font-normal text-base leading-6 w-full text-center">
          <em>{service.description}</em>
        </div>
      </div>
    </div>
  );
}
