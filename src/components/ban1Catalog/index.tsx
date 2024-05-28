
import styles from './ban1Catalog.module.css';

export default function ban1Catalog() {
  return (
      <div className={styles.block_banner_consultation}>
        <div className={styles.block_banner_consultation_title}>не знаете, что выбрать?</div>
        <div className={styles.block_banner_consultation_desc}>Закажите консультацию и мы поможем вам в подборе оборудования</div>
        <div className={styles.block_banner_consultation_btn}><a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>заказать консультацию</a></div>
        <div className={styles.block_banner_consultation_img}><img src="/assets/icons/banner_consultation.png" /></div>
      </div>
  );
};
