
import styles from './headerDefpay.module.css';

export default function headerDefpay() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>асик-майнеры в рассрочку</h1>
            <div className={styles.kam}>
              <a href="/services">Главная страница / Услуги</a> / 
              <span className={styles.kb_title}> асик-майнеры в рассрочку</span>
            </div>
          </div>
        </div>
      );
    };
    