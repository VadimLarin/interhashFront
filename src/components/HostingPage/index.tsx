
import styles from './HostingPage.module.scss';

export default function HostingPage() {
  return (
    <div className={styles.page_service}>
      <div className={styles.container}>
        <div className={styles.service_top_block}>
          <div className={styles.service_top_block_title}>
            Разместим ваше оборудование в майнинг отеле по всей России
          </div>
          <div className={styles.service_top_block_text}>
            Размещение в дата‑центрах от 3.5 рублей за кВт·ч. <br />Бесплатное подключение.
          </div>
          <div className={styles.service_top_block_btn}>
            <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>
              оставить заявку
            </a>
          </div>
        </div>

        <div className={styles.service_profitably}>
          <div className={styles.service_profitably_title}>почему сТОИТ РАЗМЕСТИТЬСЯ</div>
          <div className={styles.service_profitably_list}>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico25.svg" />
                </div>
                <div className={styles.title}>Круглосуточная поддержка 24/7</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Мы заботимся о своих клиентах и готовы помогать Вам круглосуточно.
              </div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico26.svg" />
                </div>
                <div className={styles.title}>Безопасность и сопровождение доставки</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Организуем доставку оборудования из любой точки мира. Локация известна только персоналу хостинга.
              </div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico27.svg" />
                </div>
                <div className={styles.title}>Работа по договору</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Составляем договор в качестве гарантии и прозрачности оказанных услуг.
              </div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico28.svg" />
                </div>
                <div className={styles.title}>Бесплатная установка</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Мы не берём плату за установку ваших устройств.
              </div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico29.svg" />
                </div>
                <div className={styles.title}>Любой способ оплаты</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Принимаем платежи в криптовалюте, через карту и безналичный расчет.
              </div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico30.svg" />
                </div>
                <div className={styles.title}>Ремонт Вашего оборудования</div>
              </div>
              <div className={styles.service_profitably_item_text}>
                Быстрый ремонт и замена всех деталей + бесплатное восстановление.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.service_text_block}>
          <div className={styles.service_text_block_title}>профессиональный хостинг</div>
          <div className={styles.service_text_block_text}>
            <ol>
              <li>Центры обработки данных, соблюдающие лучшие практики и операционные стандарты.</li>
              <li>Резервные ресурсы для критически важных компонентов инфраструктуры.</li>
              <li>Индивидуальная конфигурация устройства для оптимальной долгосрочной работы.</li>
              <li>Активный мониторинг, мгновенно обнаруживающий снижение производительности.</li>
              <li>Обученная команда, работающая круглосуточно и без выходных, для решения оперативных задач.</li>
              <li>Мгновенное обнаружение сбоев и быстрая локальная диагностика.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
