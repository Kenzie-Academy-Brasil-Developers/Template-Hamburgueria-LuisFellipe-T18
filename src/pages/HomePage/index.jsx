import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { apiProducts } from "../../services/api";

export const HomePage = ({ setCount }) => {
  const localList = localStorage.getItem("@BURGUERKENZIE");

  const [productList, setProductList] = useState(
    localList ? JSON.parse(localList) : []
  );
  const [cartList, setCartList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiProducts.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@BURGUERKENZIE", JSON.stringify(productList));
  }, [productList]);


  const addCart = (addingProduct) => {
    if (!cartList.some((product)=> product.id === addingProduct.id)) {
      setCartList([...cartList, addingProduct]);
    }
};

    const removeCartProduct = (productId) => {
      const newCartProduct = cartList.filter(
        (product) => product.id !== productId
      );
      setCartList(newCartProduct);
    };

    // useEffect montagem - carrega os produtos da API e joga em productList
    // useEffect atualização - salva os produtos no localStorage (carregar no estado)
    // adição, exclusão, e exclusão geral do carrinho
    // renderizações condições e o estado para exibir ou não o carrinho
    // filtro de busca
    // estilizar tudo com sass de forma responsiva

    return (
      <>
        <Header setIsVisible={setIsVisible} setFilter={setFilter} cartList={cartList} />
        <main id="container">
          <ProductList
            addCart={addCart}
            filter={filter}
            setCount={setCount}
            productList={productList}
          />
          {isVisible ? (
            <CartModal
            removeCartProduct={removeCartProduct}
              setCartList={setCartList}
              cartList={cartList}
              setIsVisible={setIsVisible}
              productList={productList}
            />
          ) : null}
        </main>
      </>
    )
  }

