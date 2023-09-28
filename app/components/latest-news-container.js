import NewsCard from "./news-card";
import styles from "../styles/latest-news-container.module.css";
import { useRouter } from 'next/router';
import Image from "next/image";

const LatestNewsContainer = () => {
const router = useRouter();
router.push('/mock_imaginario');
  return (
    <div className={styles.newsParent}>
      <NewsCard />
      <Image className={styles.frameChild} alt="gallery" src="/gallery.png" />
      <NewsCard />
      <Image className={styles.frameChild} alt="gallery" src="/gallery.png" />
      <NewsCard />
    </div>
  );
};

export default LatestNewsContainer;
