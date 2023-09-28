import Image from "next/image";
import styles from "../styles/news-card.module.css";
import { useRouter } from 'next/router';

const NewsCard = () => {
const router = useRouter ();
  return (
    <div className={styles.news}>
      <div className={styles.authors}>
        <div className={styles.authorsChild} />
        <div className={styles.anthonyLiem}>Anthony Liem</div>
      </div>
      <div className={styles.content}>
        <div className={styles.bankOfEngland}>
          Bank of England Risks Hiking Far Ahaead
        </div>
        <div className={styles.contentChild} />
      </div>
      <div className={styles.date}>
        <div className={styles.economics}>ECONOMICS</div>
        <Image className={styles.dateChild} alt="gallery" src="/gallery.png" />
        <div className={styles.aug012021}>Aug 01, 2021</div>
      </div>
    </div>
  );
};

export default NewsCard;
