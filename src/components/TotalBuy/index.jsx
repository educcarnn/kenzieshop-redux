import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TotalBuy({setMessage}) {
  const cartItems = useSelector(({ cart }) => cart);

  const totalPrice = cartItems.reduce(
    (acumulador, item) => Number(acumulador) + Number(item.price),
    0
  );
  console.log(totalPrice);

  if (cartItems.length > 0) {
    return (
      <div>
        <span>${totalPrice.toFixed(2)}</span>
        <button onClick={() => setMessage(true)}>Finalizar compra</button>
      </div>
    );
  }
  return (
    <div>
      <div>Adicione itens novamente no seu carrinho</div>
      <Link to="/">Voltar para as compras</Link>
    </div>
  );
}
export default TotalBuy;
