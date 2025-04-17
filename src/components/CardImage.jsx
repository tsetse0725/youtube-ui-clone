import styles from "../styles/Home.module.css";

export default function CardImage({ image, hoverImage }) {
  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt="video" className={styles.thumbnail} />
      <img
        src={hoverImage}
        alt="hover"
        className={`${styles.thumbnail} ${styles.hoverImage}`}
      />
    </div>
  );
}
