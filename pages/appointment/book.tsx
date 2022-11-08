import { useRouter } from "next/router";
import CalendlyWrapper from "../../components/calendly";
import Header from "../header/header";

export default function Book() {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  const id = query.transactionId as string;
  console.log(id);

  return (
    <>
      <Header />
      {id != null ? (
        <CalendlyWrapper
          url="https://calendly.com/worldofupbringing"
          transactionId={id}
        />
      ) : (
        <></>
      )}
    </>
  );
}
