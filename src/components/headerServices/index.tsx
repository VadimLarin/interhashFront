
import styles from './headerServices.module.css';

export default function headerServices() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>Услуги</h1>
            <div className={styles.kam}>
              <a href="/">Главная страница</a> / 
              <span className={styles.kb_title}> Услуги</span>
            </div>
          </div>
        </div>
      );
    };
    