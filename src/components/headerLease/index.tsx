
import styles from './headerLease.module.css';

export default function headerLease() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>асик-майнеры в ЛИЗИНГ</h1>
            <div className={styles.kam}>
              <a href="/services">Главная страница / Услуги</a> / 
              <span className={styles.kb_title}> асик-майнеры в ЛИЗИНГ</span>
            </div>
          </div>
        </div>
      );
    };
    