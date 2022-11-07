import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <span>{JSON.stringify(query)}</span>
    </div>
  );
}
