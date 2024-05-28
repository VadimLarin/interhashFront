import React from 'react';

import styles from './ban4.module.scss';

export default function ban4() {

  return (
    <div className={styles.main_b4}>
      <div className={styles.container}>
        <div className={styles.main_b4_carousel}>
          <div className={styles.main_b4_item_top}>
            <div className={styles.main_b4_item_top_title}>подключение к пулу на выгодных условиях</div>
            <div className={styles.main_b4_item_top_btn}>
              <a href="/connect" className={styles.btn} style={{ cursor: 'pointer' }}>
                подключиться к пулу
              </a>
            </div>
          </div>
          <div className={styles.main_b4_item_adv}>
            <div className={styles.main_b4_item_adv_item}>
              <span className={styles.icon}>
                <img src="/assets/icons/ico01.png" />
              </span>
              <span className={styles.text}>Высокий аптайм</span>
            </div>
            <div className={styles.main_b4_item_adv_item}>
              <span className={styles.icon}>
                <img src="/assets/icons/ico02.png" />
              </span>
              <span className={styles.text}>надежность</span>
            </div>
            <div className={styles.main_b4_item_adv_item}>
              <span className={styles.icon}>
                <img src="/assets/icons/ico03.png" />
              </span>
              <span className={styles.text}>техподдержка 24/7</span>
            </div>
            <div className={styles.main_b4_item_adv_item}>
              <span className={styles.icon}>
                <img src="/assets/icons/ico04.png" />
              </span>
              <span className={styles.text}>автовывод без комиссии</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


