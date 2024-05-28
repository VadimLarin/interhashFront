
import styles from './headerAbout.module.css';

export default function headerAbout() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>О нас</h1>
            <div className={styles.kam}>
              <a href="/">Главная страница</a> / 
              <span className={styles.kb_title}> о нас</span>
            </div>
          </div>
        </div>
      );
    };
    