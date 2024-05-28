import Head from 'next/head';
import styles from './CatalogPage.module.scss';

export default function CatalogPage() {
    return (
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.products_wrap}>
              <div className={styles.sidebar}>
                <div className={styles.sidebar_categories}>
                  <div className={styles.sidebar_category}>
                    <a href="/product">
                      <span className={styles.sidebar_category_img}>
                        <img
                          src="/assets/icons/assic.png"
                        />
                      </span>
                      <span className={styles.sidebar_category_title}>Асик-майнеры</span>
                      <span className={styles.sidebar_category_desc}>114 товаров</span>
                    </a>
                  </div>
                  <div className={styles.sidebar_category}>
                    <a href="/product">
                      <span className={styles.sidebar_category_img}>
                        <img
                          src="/assets/icons/dop.png"
                        />
                      </span>
                      <span className={styles.sidebar_category_title}>Доп. оборудование</span>
                      <span className={styles.sidebar_category_desc}>1 товар</span>
                    </a>
                  </div>
                </div>
                <div className={styles.sidebar_block}>
                  <div className={styles.widget_title}>Фильтры</div>
                  <div className={styles.text_widget}>
                    <div className={styles.n_filterss}>
                      <div className={styles.filters_container}>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>Алгоритм</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>Энергопотребление</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>хешрейт</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>производитель</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>бренд</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>
                        <div className={styles.n_filters}>
                          <h4 className={styles.filter_title}>энергоэффективность</h4>
                          <div className={styles.filter_content}>
                            {/* Фильтры будут здесь */}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.products_content}>
                <div className={styles.products_content_wrap}>
                  <ul className={styles.products}>
                    <li className={styles.product}>
                      <div className={styles.product_inner}>
                        <div className={styles.product_image}>
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"

                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
                          <a href="/product">
                            <img
                              width="300"
                              height="300"
                              src="/assets/icons/123.png"
                              className={styles.attachment_w_thumbnail}
                            />
                          </a>
                        </div>
                        <div className={styles.product_content}>
                          <div className={styles.category_list}>
                            <a href="/product">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</a>
                          </div>
                          <h2 className={styles.w_loop_product_title}>Antminer S19 90Th</h2>
                          <div className={styles.price_wrap}>
                            <span className={styles.price}>
                              <span className={styles.w_price_amount}>
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
            </div>
          </div>
        </div>
      );
    }