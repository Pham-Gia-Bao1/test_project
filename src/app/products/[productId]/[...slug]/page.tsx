import { notFound } from "next/navigation";

export default function Update({
  params,
}: {
  params: {
    productId: string;
    slug: string[];
  };
}) {
  if (
    params.slug?.length === 1
  ) {
    return (
      <>
        <h1>Update detail product {params.productId}</h1>
      </>
    );
  } else {
    notFound();
  }
  return <h1>Update page</h1>;
}
