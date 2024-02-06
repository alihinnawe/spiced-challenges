import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h2>Page is Loading</h2>;
  }
  if (error) {
    return <h1>Page is not found</h1>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
