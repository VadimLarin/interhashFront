import React from 'react';

import styles from './ban7.module.scss';

export default function ban7() {
  return (
      <div className={styles.container}>
        <div className={styles.main_b7}>
          <div className={styles.main_b7_img}>
            <img src="/assets/icons/asic.png"/>
          </div>
          <div className={styles.main_b7_content}>
            <div className={styles.main_b7_title}>Подберем нужный ASIC</div>
            <div className={styles.main_b7_text}>Закажите консультацию и мы поможем вам в подборе оборудования</div>
            <div className={styles.main_b7_btn}>
              <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>
                ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};