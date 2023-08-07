import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";

export const Header = ({ setIsVisible, setFilter, cartList }) => {
  const [search, setSearch] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setFilter(search);
    setSearch("");
  };
  return (
    <header className={styles.header__box} id="container">
      <div className={styles.header}>
        <img src={Logo} alt="Logo Kenzie Burguer" className={styles.imgLogo} />

        <button
          onClick={() => setIsVisible(true)}
          className={styles.car__button}
        >
          <MdShoppingCart size={21} />
          <span className={styles.span__car}>{cartList.length}</span>
        </button>
      </div>
      <div className={styles.search__box}>
        <form onSubmit={(event) => submit(event)}>
          <div className={styles.buttonSearchBox}>
            <input
              className="input"
              type="text"
              onChange={(e) => setSearch(e.target.value.trim())}
              placeholder="Digitar Pesquisa"
              value={search}
            />

            <button type="submit" className={styles.buttonSearch}>
              <MdSearch size={21} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};
