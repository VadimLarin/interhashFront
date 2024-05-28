import Head from 'next/head';
import styles from './ProductPage.module.scss';

export default function ProductPage() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.product_mob_title}>Antminer L7 9050M</div>
          <div className={styles.product_top}>
            <div className={styles.product_top_left}>
              <div className={styles.w_product_gallery}>
                <figure className={styles.w_product_gallery_wrapper}>
                  <div  className={styles.w_product_gallery_image}>
                    <a href="/assets/icons/123.png">
                      <img width="400" height="400" src="/assets/icons/123.png" className={styles.wp_post_image}  />
                    </a>
                  </div>
                </figure>
              </div>
            </div>
            <div className={styles.product_top_right}>
              <h1 className={`${styles.product_title} ${styles.entry_title}`}>Antminer L7 9050M</h1>
              <div className={styles.single_product_price_wrap}>
                <p className={styles.price}><span className={styles.price_none}>Цена по запросу</span></p>
                <div className={styles.single_product_payments}>
                 <img src="/assets/icons/BITCOIN_icon.svg" />
                  <img src="/assets/icons/ETH_icon.svg" />
                 <img src="/assets/icons/TETH_icon.svg" />
                 <img src="/assets/icons/RUB_icon.svg"  />
                </div>
              </div>
              <div className={styles.single_product_btn_compare}><a href="/" className={styles.compare} title="Сравнить" data-product_id="3508">Сравнить<span></span></a></div>
              <div className={styles.single_product_attributes}>
                <div className={styles.single_product_attributes_list}>
                  <div className={styles.single_product_attributes_item}>
                    <div className={styles.single_product_attributes_item_ico}><img src="/assets/icons/ico_proizvoditel.svg"  /></div>
                    <div className={styles.single_product_attributes_item_title}>Производитель</div>
                    <div className={styles.single_product_attributes_item_text}>Bitmain</div>
                  </div>
                  <div className={styles.single_product_attributes_item}>
                    <div className={styles.single_product_attributes_item_ico}><img src="/assets/icons/ico_algoritm.svg" /></div>
                    <div className={styles.single_product_attributes_item_title}>Алгоритм</div>
                    <div className={styles.single_product_attributes_item_text}>Scrypt</div>
                  </div>
                  <div className={styles.single_product_attributes_item}>
                    <div className={styles.single_product_attributes_item_ico}><img src="/assets/icons/ico_heshrejt.svg"  /></div>
                    <div className={styles.single_product_attributes_item_title}>Хешрейт</div>
                    <div className={styles.single_product_attributes_item_text}>9050 MH/s</div>
                  </div>
                  <div className={styles.single_product_attributes_item}>
                    <div className={styles.single_product_attributes_item_ico}><img src="/assets/icons/ico_potreblyaemaya_moshhnost.svg"  /></div>
                    <div className={styles.single_product_attributes_item_title}>Потребляемая мощность</div>
                    <div className={styles.single_product_attributes_item_text}>3300Вт</div>
                  </div>
                </div>
                <div className={styles.single_product_attributes_more}><a href="#">Подробнее<i></i></a></div>
              </div>
              <div className={styles.single_product_btns}>
                <div className={styles.single_product_btn}><a href="#" className={styles.btn_violet} >Быстрый заказ</a></div>
                <div className={styles.single_product_btn}><a href="#" className={styles.btn_violet} >Получить консультацию</a></div>
              </div>
            </div>
          </div>
          <div className={styles.text_block}>
            <p>Antminer L7 был представлен компанией Bitmain в 2021 году. Асик от Bitmain Antminer L7 9050M работает на алгоритме Skrypt, который обладает высоким потенциалом доходности. Устройство выигрывает по энергоэффективности, а также располагает мощностью 9050 Mh/s.</p>
            <h2>Bitmain Antminer L7 9050 Mh</h2>
            <p>Основным отличием от старой версии L3+ является наличие новых чипов, которые позволяют выдерживать длительный период работы. Характеристики Antminer L7 9050 Mh s настолько высоки, что одно такое устройство будет работать эффективнее, чем ферма из 18 майнеров L3+. Более того, стоит учесть и то, что один Асик займет намного меньше пространства, чем несколько, объединенных между собой. Относительно энергопотребления новое устройство также выигрывает, так как потребляет 3300 Вт, а не 15000 Вт.
Несмотря на то, что цена новой модели больше, чем стоимость предыдущей версии, итоговая эффективность помогает нивелировать переплату.
Внешний вид асика L7 9050M довольно привычен: корпус напоминает ПК, а в комплекте предлагается блок питания APW-12. За охлаждение отвечают 4 кулера, которые длительное время могут поддерживать оптимальную для работы температуру.
В случае необходимости, на asic L7 9050 Mh s можно установить прошивку, которая еще больше повысит эффективность работы устройства.
Описание Antminer L7 9050Mh s</p>
          </div>
        </div>
      </div>
    </div>
  );
};