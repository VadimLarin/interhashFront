
import styles from './Menu.module.css';

export default function menu() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.container}>
        <div className={styles.services_list}>
          <div className={styles.services_item}>
            <a href="/catalog">
              <div className={styles.services_item_title}>
                Каталог<i></i>
              </div>
              <div className={styles.services_item_text}>

              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/services">
              <div className={styles.services_item_title}>
                Услуги<i></i>
              </div>
              <div className={styles.services_item_text}>

              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/delivery-and-payment">
              <div className={styles.services_item_title}>
                Доставка и оплата<i></i>
              </div>
              <div className={styles.services_item_text}>

              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/contacts">
              <div className={styles.services_item_title}>
                Контакты<i></i>
              </div>
              <div className={styles.services_item_text}>

              </div>
            </a>
          </div>
          <div className={styles.services_item}>
            <a href="/about">
              <div className={styles.services_item_title}>
                О нас<i></i>
              </div>
              <div className={styles.services_item_text}>

              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};