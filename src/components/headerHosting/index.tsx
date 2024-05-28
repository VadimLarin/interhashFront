
import styles from './headerHosting.module.css';

export default function headerHosting() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>МАЙНИНГ ХОСТИНГ</h1>
            <div className={styles.kam}>
              <a href="/services">Главная страница / Услуги</a> / 
              <span className={styles.kb_title}> МАЙНИНГ ХОСТИНГ</span>
            </div>
          </div>
        </div>
      );
    };
    