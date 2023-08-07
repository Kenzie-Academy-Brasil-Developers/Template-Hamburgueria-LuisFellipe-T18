import styles from "./style.module.scss"

export const ProductCard = ({ product, addCart}) => {
    return(
        <li className={styles.card__list}>
            <img src={product.img} alt={product.name} className={styles.img} />
            <div className="card__content">
                <h3 className="heading3">{product.name}</h3>
                <span className="caption" >{product.category}</span>
                <span className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button  onClick={()=>addCart(product)}className="medium">Adicionar</button>
            </div>
        </li>
    )
}