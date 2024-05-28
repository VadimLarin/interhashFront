import React from 'react';
import styles from './ban3.module.scss';

export default function ban3() {

  return (
    <div className={styles.main_b3}>
      <div className={styles.container}>
        <div className={styles.main_b3_title}>
          ХИТЫ ПРОДАЖ{' '}
          <span className="icon">
            <img src="/assets/icons/fire.png" />
          </span>
        </div>
        <div className={styles.main_b3_desc}>цена указана в розницу. больше устройств - больше скидка</div>
        <div className={styles.products_content}>
            <div className={styles.products_content_wrap}>
                <ul className={styles.columns_tri}>
                    <li className={styles.product}>
                        <div className={styles.product_inner}>
                            <div className={styles.product_image}>
                                <a href="/product" >
                                    <img
                                        src="/assets/icons/123.png"
                                    />
                                </a>
                            </div>
                            <div className={styles.product_content}>
                                <div className={styles.category_list}>
                                    <a href="/catalog">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                                </div>
                                <h2 className={styles.product_title}>Antminer S19 90Th</h2>
                                <div className={styles.price_wrap}>
                                    <span className={styles.price}>
                                        <span className={styles.Price_amount}>
                                            <bdi>200 500 ₽</bdi>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.product_inner}>
                            <div className={styles.product_image}>
                                <a href="/product" >
                                    <img
                                        src="/assets/icons/123.png"
                                    />
                                </a>
                            </div>
                            <div className={styles.product_content}>
                                <div className={styles.category_list}>
                                    <a href="/catalog">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                                </div>
                                <h2 className={styles.product_title}>Antminer S19 90Th</h2>
                                <div className={styles.price_wrap}>
                                    <span className={styles.price}>
                                        <span className={styles.Price_amount}>
                                            <bdi>200 500 ₽</bdi>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.product_inner}>
                            <div className={styles.product_image}>
                                <a href="/assets/icons/123.png" >
                                    <img
                                        src="/assets/icons/123.png"
                                    />
                                </a>
                            </div>
                            <div className={styles.product_content}>
                                <div className={styles.category_list}>
                                    <a href="/catalog">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                                </div>
                                <h2 className={styles.product_title}>Antminer S19 90Th</h2>
                                <div className={styles.price_wrap}>
                                    <span className={styles.price}>
                                        <span className={styles.Price_amount}>
                                            <bdi>200 500 ₽</bdi>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.product_inner}>
                            <div className={styles.product_image}>
                                <a href="/assets/icons/123.png">
                                    <img
                                        src="/assets/icons/123.png"
                                    />
                                </a>
                            </div>
                            <div className={styles.product_content}>
                                <div className={styles.category_list}>
                                    <a href="/catalog">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                                </div>
                                <h2 className={styles.product_title}>Antminer S19 90Th</h2>
                                <div className={styles.price_wrap}>
                                    <span className={styles.price}>
                                        <span className={styles.Price_amount}>
                                            <bdi>200 500 ₽</bdi>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.product_inner}>
                            <div className={styles.product_image}>
                                <a href="/assets/icons/123.png" >
                                    <img
                                        src="/assets/icons/123.png"
                                    />
                                </a>
                            </div>
                            <div className={styles.product_content}>
                                <div className={styles.category_list}>
                                    <a href="/catalog">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                                </div>
                                <h2 className={styles.product_title}>Antminer S19 90Th</h2>
                                <div className={styles.price_wrap}>
                                    <span className={styles.price}>
                                        <span className={styles.Price_amount}>
                                            <bdi>200 500 ₽</bdi>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.main_b3_btn}>
          <a href="/catalog" className={styles.btn_violet}>
            ПЕРЕЙТИ В КАТАЛОГ
          </a>
        </div>
      </div>
    </div>
  );
};


