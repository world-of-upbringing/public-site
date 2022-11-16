import FrontPageSection from "./frontPageSection";
import { useState, useEffect } from "react";
import Card from "../common/card";

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
      <div key={workshop["Title"]} className="flex mx-auto py-6 w-60">
        <Card
          title={workshop["Title"]}
          subtitle="Subtitle"
          description={workshop["Description"]}
          cta={"INR " + workshop["Amount"]}
          link={`/payment?url=${workshop["PaymentLink"]}&mode=workshop`}
          date={date}
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
      <div className="flex flex-col m-auto p-auto">
        <div className="flex pb-10 hide-scroll-bar">
          <div className="flex flex-wrap mx-auto content-center">
            {childElements}
          </div>
        </div>
      </div>
    </FrontPageSection>
  );
}
