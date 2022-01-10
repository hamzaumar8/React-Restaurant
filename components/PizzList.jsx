import styles from "../styles/PizzList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";

const PizzList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Thes Best Pizza In Town</h1>
      <p className={styles.decs}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzList;
