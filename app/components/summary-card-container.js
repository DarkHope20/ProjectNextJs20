import Image from "next/image";
import styles from "../styles/summary-card-container.module.css"
import { useRouter } from 'next/router';

const SummaryCard = () => {
const router = useRouter ();
  return (
    <div className={styles.kParent}>
      <div className={styles.k}>10K</div>
      <div className={styles.k1}>20K</div>
      <div className={styles.k2}>30K</div>
      <div className={styles.k3}>40K</div>
      <div className={styles.k4}>50K</div>
      <Image className={styles.frameChild} alt="" src="/undefined1.png" />
      <Image className={styles.frameItem} alt="" src="/undefined1.png" />
      <Image className={styles.frameInner} alt="" src="/undefined1.png" />
      <Image className={styles.vectorIcon} alt="" src="/undefined1.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.sun}>Sun</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
          </div>
          <div className={styles.sun}>Mon</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild4} />
            <div className={styles.frameChild5} />
          </div>
          <div className={styles.sun}>Tue</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild6} />
            <div className={styles.frameChild7} />
          </div>
          <div className={styles.sun}>Wed</div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild8} />
            <div className={styles.frameChild9} />
          </div>
          <div className={styles.sun}>Thu</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild10} />
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.sun}>Fri</div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild8} />
            <div className={styles.frameChild13} />
          </div>
          <div className={styles.sun}>Sat</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.thursdayParent}>
            <div className={styles.sun}>Thursday</div>
            <div className={styles.div}>$12,431.09</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
