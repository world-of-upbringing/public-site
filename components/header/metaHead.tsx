import Head from "next/head";

export default function MetaHead({ title }: { title?: string }) {
  return (
    <Head>
      <title>{"World of Upbringing" + (title ? " | " + title : "")}</title>
      <link rel="icon" href="images/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="any" />
      <meta
        name="description"
        content="World of Upbringing - Nurturing Values"
      />
    </Head>
  );
}
