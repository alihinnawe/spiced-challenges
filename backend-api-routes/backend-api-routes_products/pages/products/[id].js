import { useRouter } from "next/router";
import { getAllProducts } from "../../services/productServices.js";

export default function FetchCustomers() {
  const router = useRouter();
  const { id } = router.query; // Change from 'idi' to 'id'
  console.log("idssssssssssssss isssssss:", id);

  const answerdataOne = getAllProducts(id).find((product) => product.id === id);
  console.log("answerd one isssssssssssscccccccccccccccccccc", answerdataOne);

  if (!answerdataOne) {
    return <h2>Page is Loading</h2>;
  }

  //   return (
  //     <div key={answerdataOne.id}>
  //       {" "}
  //       <h1>{answerdataOne.name}</h1>
  //       <h2>{answerdataOne.description}</h2>
  //     </div>
  //   );
  return (
    <div key={answerdataOne.id}>
      {Object.keys(answerdataOne).map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {answerdataOne[key]}
        </div>
      ))}
    </div>
  );
}
