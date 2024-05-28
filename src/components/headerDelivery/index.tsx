
import styles from './headerDelivery.module.css';

export default function headerDelivery() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>Доставка и оплата</h1>
            <div className={styles.kam}>
              <a href="/">Главная страница</a> / 
              <span className={styles.kb_title}> Доставка и оплата</span>
            </div>
          </div>
        </div>
      );
    };
    