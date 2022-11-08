import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Header from "../header/header";

export default function Failure() {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <Header />
      <span>
        Transaction failed, please retry again: {JSON.stringify(query)}
      </span>
      <Link href="/">
        <Button>Return to home</Button>
      </Link>
    </>
  );
}
