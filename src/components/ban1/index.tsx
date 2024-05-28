import React from 'react';

import styles from './ban1.module.scss';

export default function ban1() {
  return (
    <div className={styles.container}>
      <div className={styles.main_b1}>
        <div className={styles.main_b1_banner}>
          <h1>Оборудование для майнинга</h1>
          <div className={styles.desc}>По оптовым ценам</div>
          <div className={styles.main_b1_banner_btn}>
            <a href="#" className={styles.btn} style={{ cursor: 'pointer' }}>
              Получить актуальные цены
            </a>
          </div>
          <div className={styles.main_b1_banner_img}>
            <img
              src="/assets/icons/mining.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

