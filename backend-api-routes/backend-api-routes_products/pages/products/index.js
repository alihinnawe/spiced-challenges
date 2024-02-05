import useSWR from "swr";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function product_fetcher() {
  const { data, error, isLoading } = useSWR("api/products", fetcher);

  if (error) {
    return <div>can't load Product</div>;
  }

  if (isLoading) {
    return <div>Page is Loading... Please wait</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <a href={`products/${product.id}`}>{product.name}</a>
        </div>
      ))}
    </div>
  );
}
