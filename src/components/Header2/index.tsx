import React from 'react';

import styles from './header2.module.css';

export default function Header2() {
  return (
    <div className={styles.header_wrap}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.h_row}>
            <div className={styles.h_logo}>
            <div className={styles.h_btn_mob_menu}>
              <a href="/menu" >
                <img src="/assets/icons/burger.svg" />
              </a>
              </div>
  
              <a href="/">
                <img className={styles.logo} src="/assets/icons/logo.svg" />
              </a>
              
            </div>
            <div className={styles.h_search}>
              <form method="get" action="/">
                <input type="text" defaultValue="" name="s" placeholder="Поиск" />
                <input type="hidden" name="post_type" value="product" />
                <button type="submit"></button>
              </form>
            </div>
            <div className={styles.h_mob_bg}></div>

              <div className={styles.h_nav}>
                <ul id="menu" className={styles.menu}>
                  <li id="menu-item-1" className={styles.h_nav}>
                    <a href="/catalog">Каталог</a>
                  </li>
                  <li id="menu-item-2" className={styles.h_nav}>
                    <a href="services">Услуги</a>
                  </li>
                  <li id="menu-item-3" className={styles.h_nav}>
                    <a href="/delivery-and-payment">Доставка и оплата</a>
                  </li>
                  <li id="menu-item-4" className={styles.h_nav}>
                    <a href="/contacts">Контакты</a>
                  </li>
                  <li id="menu-item-5" className={styles.h_nav}> 
                    <a href="/about">О нас</a>
                  </li>
                </ul>
              </div>
              <div className={styles.h_contacts}>
                <div className={styles.h_btn_mob_search} ></div>
                <div className={styles.h_telegram}><a href="https://t.me/" target="_blank"></a></div>
                <div className={styles.h_whatsapp}><a href="#" target="_blank"></a></div>
                <div className={styles.h_phone}><a href="tel:+7 981 03-81-762">+7 981 03-81-762</a></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};


