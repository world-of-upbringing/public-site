import { useRouter } from "next/router";
import CalendlyWrapper from "../../components/external/calendlyWrapper";
import PageWrapper from "../../components/header/pageWrapper";

export default function AppointmentPage() {
  const router = useRouter();
  const query = router.query;
  const id = query.transactionId as string;

  return (
    <PageWrapper>
      {id != null ? (
        <CalendlyWrapper
          url="https://calendly.com/worldofupbringing"
          transactionId={id}
        />
      ) : (
        <></>
      )}
    </PageWrapper>
  );
}
