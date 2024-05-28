import React from 'react';

import styles from './ban6.module.scss';

export default function ban6() {
  return (
    <div className={styles.main_b6}>
      <div className={styles.container}>
        <div className={styles.main_b6_title}>подбери свое оборудование <br />для майнинга</div>
        <div className={styles.main_b6_list}>
          <div className={styles.main_b6_item}>
            <div className={styles.main_b6_item_ico}><img src="/assets/icons/ico07.png"/></div>
            <div className={styles.main_b6_item_title}>Удобная доставка</div>
            <div className={styles.main_b6_item_text}>По всей России и СНГ</div>
          </div>
          <div className={styles.main_b6_item}>
            <div className={styles.main_b6_item_ico}><img src="/assets/icons/ico08.png"/></div>
            <div className={styles.main_b6_item_title}>Оптовые цены</div>
            <div className={styles.main_b6_item_text}>Работаем с крупными поставщиками</div>
          </div>
          <div className={styles.main_b6_item}>
            <div className={styles.main_b6_item_ico}><img src="/assets/icons/ico09.png"/></div>
            <div className={styles.main_b6_item_title}>Быстрая консультация</div>
            <div className={styles.main_b6_item_text}>Находимся онлайн 24/7</div>
          </div>
          <div className={styles.main_b6_item}>
            <div className={styles.main_b6_item_ico}><img src="/assets/icons/ico10.png"/></div>
            <div className={styles.main_b6_item_title}>Гарантия на оборудование</div>
            <div className={styles.main_b6_item_text}>Действует на все наше оборудование</div>
          </div>
        </div>
        <div className={styles.main_b6_btn}><a href="/form" className={styles.btn_violet} style={{ cursor: 'pointer' }}>ЗАКАЗАТЬ ЗВОНОК</a></div>
      </div>
    </div>
  );
};