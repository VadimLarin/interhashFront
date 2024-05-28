
import styles from './headerContacts.module.css';

export default function headerContacts() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>Контакты</h1>
            <div className={styles.kam}>
              <a href="/">Главная страница</a> / 
              <span className={styles.kb_title}> Контакты</span>
            </div>
          </div>
        </div>
      );
    };
    