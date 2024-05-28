
import styles from './ConnectPage.module.scss';

export default function ConnectPage() {
    return (
        <div className={styles.page_service}>
          <div className={styles.container}>
            <div className={styles.service_top_block}>
              <div className={styles.service_top_block_title}>подключение к майнинг пулу</div>
              <div className={styles.service_top_block_text}>
                Мы являемся официальным представителем ViaBTC – одного из крупнейших мировых майнинговых пулов, занимающих лидирующие позиции на рынке СНГ и Европы.
              </div>
              <div className={styles.service_top_block_btn}>
                <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>оставить заявку</a>
              </div>
            </div>
    
            <div className={styles.service_profitably}>
              <div className={styles.service_profitably_title}>Почему с нами выгодно</div>
              <div className={styles.service_profitably_list}>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico15.svg" />
                    </div>
                    <div className={styles.title}>Автовывод</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>Удобный ежедневный автовывод без комиссии BTC, на любой кошелёк, без комиссии.</div>
                </div>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico16.svg" />
                    </div>
                    <div className={styles.title}>Несколько режимов майнинга</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>
                    Смарт Майнинг — автоматическое переключение между BTC и BCH на основе анализа их прибыльности в текущий момент времени. Merged mining — объединенный майнинг других монет.
                  </div>
                </div>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico17.svg" />
                    </div>
                    <div className={styles.title}>Реферальная программа</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>При привлечении клиентов на ViaBTC pool вы получаете кешбек. (Кешбек можно разделить на скидку и кешбек в любой пропорции).</div>
                </div>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico18.svg" />
                    </div>
                    <div className={styles.title}>Премиальный сервис</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>Есть VIP сервера по всему миру расположены по всему миру.</div>
                </div>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico19.svg" />
                    </div>
                    <div className={styles.title}>PPS+</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>
                    Самый надежный метод выплат, при котором пул самостоятельно покрывает риски майнеров в случае нахождения небольшого количества монет.
                  </div>
                </div>
                <div className={styles.service_profitably_item}>
                  <div className={styles.service_profitably_item_top}>
                    <div className={styles.icon}>
                      <img src="/assets/icons/ico20.svg" />
                    </div>
                    <div className={styles.title}>Приложение; API; Watcher-link</div>
                  </div>
                  <div className={styles.service_profitably_item_text}>
                    Круглосуточное предоставление информации о статусе майнеров. Поддерживается регистрация нескольких аккаунтов
                  </div>
                </div>
              </div>
            </div>
    
            <div className={styles.service_block_content}>
              <div className={styles.service_block_content_title}>ViaBTC предоставляет полный спектр услуг по майнингу</div>
              <div className={styles.service_block_content_text}>
                ViaBTC один из крупнейших мировых майнонговых пулов. Который был основан в 2016 году. Команда ViaBTC принимала участие в создании Bitcoin Cash, поэтому пул стал первым, который поддерживает эту криптовалюту. Также ViaBTC разработало самый прибыльный на сегодняшний день метод оплаты – PPS+.
              </div>
              <div className={styles.service_block_content_monet}>
                <span>Поддержка 10 монет: </span>
                <img src="/assets/icons/ico_monet01.png" />
                <img src="/assets/icons/ico_monet02.png" />
                <img src="/assets/icons/ico_monet03.png" />
                <img src="/assets/icons/ico_monet04.png" />
                <img src="/assets/icons/ico_monet05.png" />
                <img src="/assets/icons/ico_monet06.png" />
                <img src="/assets/icons/ico_monet07.png" />
                <img src="/assets/icons/ico_monet08.png" />
                <img src="/assets/icons/ico_monet09.png" />
                <img src="/assets/icons/ico_monet10.png" />
              </div>
              <div className={styles.service_block_content_promocode}>По промокоду <span>533030</span> будет действовать скидка — 50% на все монеты.</div>
              <div className={styles.service_block_content_bottom}>
                От 1 ph — индивидуальные условия. Получи подробности в нашем телеграмм viainterhash_bot
              </div>
            </div>
    
            <div className={styles.service_block_support}>
              <div className={styles.service_block_support_item}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico21.svg" />
                </div>
                <div className={styles.service_block_support_item_title}>Управление процессом</div>
                <div className={styles.service_block_support_item_text}>
                  Просмотр выручки в один клик <br />
                  Постоянное предоставление информации о хэшрейте в реальном времени Круглосуточное предоставление информации о статусе майнеров <br />
                  Поддерживается регистрация нескольких аккаунтов
                </div>
              </div>
              <div className={styles.service_block_support_item}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico22.svg" />
                </div>
                <div className={styles.service_block_support_item_title}>Управление активами</div>
                <div className={styles.service_block_support_item_text}>
                  Мультивалютный кошелёк, поддержка внесения и перевода средств <br />
                  Покупка-продажа криптовалюты, авто-конверсия <br />
                  Выплаты без комиссий
                </div>
              </div>
              <div className={styles.service_block_support_item}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico23.svg" />
                </div>
                <div className={styles.service_block_support_item_title}>Финансовые услуги</div>
                <div className={styles.service_block_support_item_text}>
                  Хеджирование, предотвращение финансовых потерь, защита Вашей прибыли <br />
                  Круглосуточное предоставление займов в криптовалюте - возвращайте кредит, когда у Вас будет достаточно средств
                </div>
              </div>
              <div className={styles.service_block_support_item}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico24.svg" />
                </div>
                <div className={styles.service_block_support_item_title}>Смарт-инструменты</div>
                <div className={styles.service_block_support_item_text}>
                  Акселератор транзакций - не теряйте времени в ожидании <br />
                  Рассчитайте Ваш текущий доход в один клик с помощью калькулятора прибыли <br />
                  Быстрый доступ к первоклассным дата центрам по всему миру
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };