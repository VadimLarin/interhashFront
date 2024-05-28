
import styles from './headerProduct.module.css';

export default function headerProduct() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>

            <div className={styles.kam}>
              <a href="/">Главная страница / Каталог / ASIC майнеры</a> / 
              <span className={styles.kb_title}> antminer l7 9050m</span>
            </div>
          </div>
        </div>
      );
    };
    