import React from 'react';

import styles from './ban2.module.scss';

export default function ban2() {

  return (
    <div className={styles.main_b2}>
      <div className={styles.container}>
        <div className={styles.main_b2_title}>Предлагаем готовые решения</div>
        <div className={styles.main_b2_list}>
          <div className={styles.main_b2_item}>
            <div className={styles.main_b2_item_top}>
              <div className={styles.main_b2_item_top_ico}>
                <img src="/assets/icons/b2_ico01.png" />
              </div>
              <div className={styles.main_b2_item_top_title}>Продажа оборудования</div>
            </div>
            <div className={styles.main_b2_item_text}>
              Доставка в любую точку мира
              <br />
              Оптовые цены на оборудование
              <br />
              Гарантия на все наши товары
            </div>
          </div>
          <div className={styles.main_b2_item}>
            <div className={styles.main_b2_item_top}>
              <div className={styles.main_b2_item_top_ico}>
                <img src="/assets/icons/b2_ico02.png" />
              </div>
              <div className={styles.main_b2_item_top_title}>Размещение на хостинге</div>
            </div>
            <div className={styles.main_b2_item_text}>
              Дата-центры от 3.5 рублей за кВт*ч
              <br />
              Майнинг отели по всей России
              <br />
              Бесплатная установка оборудования
            </div>
          </div>
          <div className={styles.main_b2_item}>
            <div className={styles.main_b2_item_top}>
              <div className={styles.main_b2_item_top_ico}>
                <img src="/assets/icons/b2_ico03.png" />
              </div>
              <div className={styles.main_b2_item_top_title}>Подключение к пулу</div>
            </div>
            <div className={styles.main_b2_item_text}>
              Официальные представители ViaBTC
              <br />
              Выгодные условия сотрудничества
              <br />
              Техподдержка онлайн 24/7
            </div>
          </div>
        </div>
        <div className={styles.main_b2_btn}>
          <a href="/form" className={styles.btn_violet} style={{ cursor: 'pointer' }}>
            ХОЧУ УЗНАТЬ БОЛЬШЕ
          </a>
        </div>
      </div>
    </div>
  );
};

