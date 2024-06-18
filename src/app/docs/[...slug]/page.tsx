import { notFound } from "next/navigation";

export default function Doc({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (
    params.slug?.length === 1 &&
    parseInt(params.slug[0]) < 100 &&
    parseInt(params.slug[0]) > 0
  ) {
    return (
      <>
        <h1>Doc detail by id {params.slug[0]}</h1>
      </>
    );
  } else {
    notFound();
  }
  return <h1>Doc page</h1>;
}
