import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../../store/Modules/cart/actions";

function Buy() {
  const products = useSelector(({products}) => products);
  const dispatch = useDispatch()
  const items = (products) => {

    return (
      <li key={products.id}>
        <span>{products.name}</span>
        <span>{products.price.toFixed(2)}</span>
        <img src={products.image} alt={products.image}></img>
        <button onClick={() => dispatch(add(products))} >Adicione ao carrinho</button>
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
