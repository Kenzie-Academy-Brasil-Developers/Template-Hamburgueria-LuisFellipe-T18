import { ProductCard } from "./ProductCard";
 import styles from "./style.module.scss" 

export const ProductList = ({ productList, filter, addCart }) => {

   const filteredProducts = productList.filter((product)=>{

      return product.name.toLowerCase().includes(filter.toLowerCase())

   })
   return (
      <ul  className={styles.listBox} >
         {filteredProducts.map((product) => (
            <ProductCard  key={product.id} product={product}  addCart={addCart}/>
         ))}
      </ul>
   );
};
