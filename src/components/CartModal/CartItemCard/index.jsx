import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartProduct }) => {
  return (
    <li className={styles.card__list}>
      <div className="card__head">
        <img src={product.img} alt={product.name} className={styles.imageBox} />
        <h3 className="heading3">{product.name}</h3>
      </div>
      
      <button
        onClick={() => removeCartProduct(product.id)}
        className={styles.button}
        aria-label="delete"
        title="Remover item"
      >
          <MdDelete size={21} />
      </button>
        
    </li>
  );
};
