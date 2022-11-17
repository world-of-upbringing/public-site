import Head from "next/head";

export default function MetaHead({ title }: { title?: string }) {
  return (
    <Head>
      <title>{"World of Upbringing" + (title ? " | " + title : "")}</title>
      <meta
        name="description"
        content="World of Upbringing - Nurturing Values"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
