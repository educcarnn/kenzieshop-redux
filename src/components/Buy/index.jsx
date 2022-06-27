import { products } from "../../services";

function Buy() {
  const items = (products) => {
    return (
      <li>
        <span>{products.name}</span>
        <span>{products.price}</span>
        <img src={products.image} alt={products.image}></img>
        <button>Adicione ao carrinho</button>
      </li>
    );
  };

  return (
    <>
      <ul>{products.map(items)}</ul>
    </>
  );
}
export default Buy;
