import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({
  cartList,
  setIsVisible,
  setCartList,
  removeCartProduct,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.cart__modal} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.head}>
          <h2 className={styles.heading4}>Carrinho de compras</h2>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} color="#FFFFFF" />
          </button>
        </div>
        <div className={styles.content__modal}>
          
            <ul className={styles.listProducts}>
              {cartList.map((product) => (
                <CartItemCard
                  key={product.id}
                  product={product}
                  removeCartProduct={removeCartProduct}
                />
              ))}
            </ul>
          
          <div>
            <div className={styles.total__value}>
              <span className="headline">Total</span>
              <span className="body">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button
              onClick={() => setCartList([])}
              className="default remove__all"
            >
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
