import { useState, useEffect } from "react";
import Card from "../common/card";
import Modal from "../common/modal";
import { IWorkshop } from "../../lib/interfaces/IWorkshops";

export default function Workshops() {
  const [expandedCard, setExpandedCard] = useState<string | undefined>(
    undefined
  );
  const [data, setData] = useState<IWorkshop[]>([]);
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
  if (data.length === 0) return <p>No workshops found</p>;
  let expandedCardInfo;
  if (expandedCard) {
    const expWorkshop = data.find((x) => x.Title === expandedCard);
    if (expWorkshop) {
      expandedCardInfo = (
        <Card
          title={expWorkshop["Title"]}
          duration={expWorkshop["Duration"]}
          subtitle={expWorkshop["Subtitle"]}
          description={expWorkshop["Description"]}
          amount={expWorkshop["Amount"].toString()}
          lang={expWorkshop["Language"]}
          link={expWorkshop["PaymentLink"]}
          date={expWorkshop["Date"]}
          isExpanded={true}
          onClick={() => setExpandedCard(expWorkshop["Title"])}
        />
      );
    }
  }

  const childElements = [];
  for (const workshop of data) {
    childElements.push(
      <div key={workshop["Title"]} className="flex mx-auto px-3 py-6 w-72">
        <Card
          title={workshop["Title"]}
          subtitle={workshop["Subtitle"]}
          duration={workshop["Duration"]}
          description={workshop["Description"]}
          amount={workshop["Amount"].toString()}
          lang={workshop["Language"]}
          link={workshop["PaymentLink"]}
          date={workshop["Date"]}
          isExpanded={false}
          onClick={() => setExpandedCard(workshop["Title"])}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col m-auto p-auto">
      {expandedCard && (
        <Modal isOpen={true} onClose={() => setExpandedCard(undefined)}>
          {expandedCardInfo ?? <></>}
        </Modal>
      )}
      <div className="flex pb-10 hide-scroll-bar">
        <div className="flex flex-wrap mx-auto content-center">
          {childElements}
        </div>
      </div>
    </div>
  );
}
