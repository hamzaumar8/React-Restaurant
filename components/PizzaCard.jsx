import Image from "next/image";
import styles from "../styles/PizzCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Fiori Di zucca</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry
      </p>
    </div>
  );
};

export default PizzaCard;
