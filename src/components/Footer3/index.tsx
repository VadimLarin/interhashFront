import React from 'react';
import styles from './footer3.module.css';

export default function Footer3() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.f_top}>
          <div className={styles.f_top_item}>
            <div className={styles.f_top_item_title}>Связаться с нами</div>
            <div className={styles.f_telegram}><a href="https://t.me/" target="_blank" rel="noopener noreferrer"><i></i><span>@viainterhash_bot</span></a></div>
            <div className={styles.f_email}><a href="mailto:info@interhash.ru"><i></i><span>info@interhash.ru</span></a></div>
            <div className={styles.f_phone}><a href="tel:+7 981 03-81-762"><i></i><span>+7 981 03-81-762</span></a></div>
            <div className={styles.f_adres}>
              ООО “Интерхеш” <br />
              г. Москва, <br />
              ул. Доброслободская, д. 7/1, стр. 3, пом. 2/2, оф. 3 <br />
              ИНН: 9701207352
            </div>
          </div>
          <div className={styles.f_top_item}> {/*f_menu_catalog">*/}
            <div className={styles.f_top_item_title}>Каталог</div>
            <div className={styles.f_menu}>
              <ul>
                <li>
                  <a href="/asic">Асик-майнеры</a>
                  <ul>
                    <li><a href="/bitmain">Bitmain</a></li>
                    <li><a href="/canaan">Canaan</a></li>
                    <li><a href="/innosilicon">Innosilicon</a></li>
                    <li><a href="/whatsminer">Whatsminer</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/dop">Доп.оборудование</a>
                  <ul>
                    <li><a href="/ohlazhdenie/">Иммерсионное охлаждение</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.f_top_item}>
            <div className={styles.f_top_item_title}>Услуги</div>
            <div className={styles.f_menu}>
              <ul>
                <li><a href="/connect">Майнинг пул</a></li>
                <li><a href="/hosting">Хостинг оборудования</a></li>
                <li><a href="/defpay">Рассрочка</a></li>
                <li><a href="/lease">Лизинг</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.f_top_item}>
            <div className={styles.f_top_item_title}>Информация</div>
            <div className={styles.f_menu}>
              <ul>
                <li><a href="/about/">О нас</a></li>
                <li><a href="/delivery-and-payment/">Доставка и оплата</a></li>
                <li><a href="/faq/">Вопросы и ответы</a></li>
                <li><a href="/coop/">Сотрудничество</a></li>
                <li><a href="/contacts/">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.f_top_item}>
            <div className={styles.f_top_item_title}>Методы оплаты</div>
            <div className={styles.f_payments}>
              <img src="/assets/icons/BITCOIN_icon.svg" alt="pay01" />
              <img src="/assets/icons/ETH_icon.svg" alt="pay02" />
              <img src="/assets/icons/TETH_icon.svg" alt="pay03" />
              <img src="/assets/icons/RUB_icon.svg" alt="pay04" />
            </div>
            <div className={styles.f_payments_text}>Возможна оплата в рассрочку и лизинг</div>
          </div>
        </div>
        <div className={styles.f_bottom}>
          <div className={styles.f_logo}><a href="/"><img src="/assets/icons/logo.svg" /></a></div>
          <div className={styles.f_copyright}>Interhash © 2023. Все права защищены</div>
        </div>
      </div>
    </div>
  );
};





