
import styles from './ban2Services.module.css';

export default function ban2Services() {
  return (
    <div className={styles.block_mainers_wrap}>
      <div className={styles.container}>
        <div className={styles.block_mainers}>
          <div className={styles.block_mainers_img}>
            <img
              src="/assets/icons/asic.png"
            />
          </div>
          <div className={styles.block_mainers_content}>
            <div className={styles.block_mainers_title}>Разместить майнеры</div>
            <div className={styles.block_mainers_text}>
              Оставляйте контакты – мы перезвоним и дадим подробную консультацию по размещению.
            </div>
            <div className={styles.block_mainers_btn}>
              <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>
                Разместить майнеры
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
