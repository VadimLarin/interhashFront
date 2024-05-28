
import styles from './ban1About.module.css';

export default function ban1About() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.block_delivery_list}>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_text}>
            Наша компания специализируется на предоставлении полного комплекса услуг для майнеров.
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Поможем начать</div>
            <div className={styles.block_delivery_item_text}>
            Здесь вы найдете все необходимое для того, чтобы начать майнить быстро и эффективно. 
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Настроим бизнес процессы</div>
            <div className={styles.block_delivery_item_text}>
            Специалисты Interhash не просто готовы продать вам оборудование для добычи криптовалюты, но и помочь настроить бизнес-процессы и сэкономить
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Способы оплаты</div>
            <div className={styles.block_delivery_item_text}>
            Interhash – официальный партнер одного из крупнейших пулов для майнинга ViaBTC. Поэтому с нами вас ждут лучшие условия сотрудничества.Мы работаем с поставщиками устройств напрямую, имеем выгодные контракты, что позволяет нам продавать оборудование по привлекательным ценам, которые значительно ниже рынка.С помощью широкой партнерской сети хостингов мы поможем разместить ваше оборудование не только на территории СНГ, но и в других странах быстро, безопасно и очень выгодно.Наши сотрудники отлично разбираются во всех тонкостях майнинга, поэтому мы сможем не только подобрать необходимое оборудование, но и оптимизировать затраты на электроэнергию.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};