import { useRouter } from 'next/router';
import styles from "../styles/footer.module.css"
import Image from 'next/image';

const Footer = () => {
const router = useRouter ();
router.push('/mock_imaginario');
return (
<div className={styles.frameParent}>
<div className={styles.frameGroup}>
  <div className={styles.vuesaxoutlineexportParent}>
    <Image
      class={styles.vuesaxoutlineexportIcon}
      src="/export.png"
      alt="export"
    />
    <div className={styles.monthlyGroceriesParent}>
      <div className={styles.monthlyGroceries}>Monthly Groceries</div>
      <div className={styles.fromSavingsWallet}>Aug 10, 2021</div>
    </div>
  </div>
  <div className={styles.frameContainer}>
  <Image class={styles.frameChild} src="/frame467.png" alt="redframe" />
    <div className={styles.monthlyGroceries}>Low</div>
  </div>
  <div className={styles.parent}>
    <div className={styles.monthlyGroceries}> -US1800,00</div>
    <div className={styles.fromSavingsWallet}>From "savings" wallet</div>
  </div>
</div>
<Image class={styles.frameItem} src="/export.png" alt="export" />
<div className={styles.frameDiv}>
  <div className={styles.vuesaxoutlineexportGroup}>
  <Image
      class={styles.vuesaxoutlineexportIcon}
      src="/export.png"
      alt="export"
    />
    <div className={styles.freelanceWorkParent}>
      <div className={styles.monthlyGroceries}>Freelance Work</div>
      <div className={styles.fromSavingsWallet}>Aug 10, 2021</div>
    </div>
  </div>
  <div className={styles.frameParent1}>
  <Image class={styles.frameChild} src="/frame468.png" alt="greenframe" />
    <div className={styles.monthlyGroceries}>High</div>
  </div>
  <div className={styles.group}>
    <div className={styles.monthlyGroceries}> -US650,00</div>
    <div className={styles.fromSavingsWallet}>From upwork</div>
  </div>
</div>
<Image class={styles.frameItem} src="/frame467.png" alt="redframe" />
<div className={styles.frameGroup}>
  <div className={styles.vuesaxoutlineexportContainer}>
  <Image
      class={styles.vuesaxoutlineexportIcon}
      src="/export.png"
      alt="export"
    />
    <div className={styles.carRepairmentParent}>
      <div className={styles.monthlyGroceries}>Car Repairment</div>
      <div className={styles.fromSavingsWallet}>Aug 10, 2021</div>
    </div>
  </div>
  <div className={styles.frameParent1}>
  <Image class={styles.frameChild} src="/frame467.png" alt="redframe" />
    <div className={styles.monthlyGroceries}>High</div>
  </div>
  <div className={styles.container}>
    <div className={styles.div2}> -US650,00</div>
    <div className={styles.fromUtilitiesWallet}>
      From "utilities" wallet
    </div>
  </div>
</div>
<Image class={styles.frameItem} src="/frame467.png" alt="redframe" />
<div className={styles.frameGroup}>
  <div className={styles.vuesaxoutlineexportParent1}>
  <Image
      class={styles.vuesaxoutlineexportIcon3}
      src="/export.png"
      alt="export"
    />
    <div className={styles.carRepairmentGroup}>
      <div className={styles.carRepairment1}>Car Repairment</div>
      <div className={styles.fromUtilitiesWallet}>Aug 10, 2021</div>
    </div>
  </div>
  <div className={styles.frameParent5}>
  <Image class={styles.frameChild2} src="/frame467.png" alt="redframe" />
    <div className={styles.high2}>High</div>
  </div>
  <div className={styles.container}>
    <div className={styles.div2}> -US650,00</div>
    <div className={styles.fromUtilitiesWallet}>
      From "utilities" wallet
    </div>
  </div>
</div>
</div>
)};

export default Footer;
