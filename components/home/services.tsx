import { faBriefcase, faChild } from "@fortawesome/free-solid-svg-icons";
import FrontPageSection from "./frontPageSection";
import Service, { IService } from "./service";

export default function Services() {
  const buffer = [];

  let services: IService[] = [];
  services = [
    {
      icon: faChild,
      title: "One-to-One / Couple Therapy",
      description:
        "A perfect safe space for clients to have one-to-one or couple therapy & conversations to explore, explain and experience the journey of healing intimate conflicts.",
    },
    {
      icon: faBriefcase,
      title: "Workshops / Classes",
      description:
        "Webinars are conducted periodically on topics related to Marriage, Mental Health Wellness, & Parenting. To know more about the upcoming workshops",
    },
  ];

  for (const service of services) {
    buffer.push(
      <Service
        key={service.title}
        id={`service-${service.title}`}
        service={service}
      />
    );
  }
  return (
    <FrontPageSection
      title="Service Offerings"
      description={undefined}
      backgroundColor={false}
    >
      <div className="flex flex-wrap py-12 px-3 mx-auto text-grey">
        {buffer}
      </div>
    </FrontPageSection>
  );
}
