import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <div>
        {data.reviews ? (
          data.reviews.map((review) => (
            <div key={review._id}>
              <p>Review: {review.text}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))
        ) : (
          <h1>review is not found</h1>
        )}
      </div>
      <StyledLink href="/">Back to all</StyledLink>
    </>
  );
}
