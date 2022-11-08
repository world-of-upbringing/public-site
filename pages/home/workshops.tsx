import FrontPageSection from "../../components/front-page-section";
import { useState, useEffect } from "react";
import Card from "../../components/card";

export default function Workshops() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/.netlify/functions/get-workshops")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (data == null || data == undefined) return <p>No workshops found</p>;

  const childElements = [];
  for (const workshop of data as []) {
    const date = new Date(workshop["Date"]).toLocaleString();

    childElements.push(
      <div className="inline-block px-3 py-3">
        <Card
          title={workshop["Title"]}
          description={workshop["Description"]}
          cta={"INR " + workshop["Amount"]}
          link={workshop["PaymentLink"]}
          date={date}
          feature={"INR" + workshop["Amount"]}
        />
      </div>
    );
  }

  return (
    <FrontPageSection
      title="Workshops"
      description={undefined}
      backgroundColor={true}
    >
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            {childElements}
          </div>
        </div>
      </div>
    </FrontPageSection>
  );
}
