import { useRouter } from "next/router";
import CalendlyWrapper from "../../components/calendly";
import Header from "../header/header";

export default function Book() {
  const router = useRouter();
  const query = router.query;
  const id = query.transactionId as string;
  console.log(id);
  if (!id) return <></>

  return <>
    <Header/>
    <CalendlyWrapper url="https://calendly.com/worldofupbringing" transactionId={id}/>
  </>

}