
import styles from './headerConnect.module.css';

export default function headerConnect() {
    return (
        <div className={styles.page_header}>
          <div className={styles.container}>
            <h1>подключение к майнинг пулу</h1>
            <div className={styles.kam}>
              <a href="/services">Главная страница / Услуги</a> / 
              <span className={styles.kb_title}> Майнинг пул</span>
            </div>
          </div>
        </div>
      );
    };
    