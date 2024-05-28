
import styles from './headerCatalog.module.css';

export default function headerCatalog() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>Каталог</h1>
            <div className={styles.kam}>
              <a href="/">Главная страница</a> / 
              <span className={styles.kb_title}> Товары</span>
            </div>
          </div>
        </div>
      );
    };
    