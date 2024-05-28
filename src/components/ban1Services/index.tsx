
import styles from './ban1Services.module.css';

export default function ban1Services() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.container}>
        <div className={styles.services_list}>
          <div className={styles.services_item}>
            <a href="/connect">
              <div className={styles.services_item_title}>
                Майнинг пул<i></i>
              </div>
              <div className={styles.services_item_text}>
                ViaBTC является одним из крупнейших мировых майнинговых пулов, занимающих лидирующие позиции на рынке СНГ и Европы.
              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/hosting">
              <div className={styles.services_item_title}>
                Хостинг<i></i>
              </div>
              <div className={styles.services_item_text}>
                ViaBTC является одним из крупнейших мировых майнинговых пулов, занимающих лидирующие позиции на рынке СНГ и Европы.
              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/">
              <div className={styles.services_item_title}>
                Рассрочка<i></i>
              </div>
              <div className={styles.services_item_text}>
                ViaBTC является одним из крупнейших мировых майнинговых пулов, занимающих лидирующие позиции на рынке СНГ и Европы.
              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/">
              <div className={styles.services_item_title}>
                Лизинг<i></i>
              </div>
              <div className={styles.services_item_text}>
                ViaBTC является одним из крупнейших мировых майнинговых пулов, занимающих лидирующие позиции на рынке СНГ и Европы.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};