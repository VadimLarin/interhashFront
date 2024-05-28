
import styles from './ban1Delivery.module.css';

export default function ban1Delivery() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.block_delivery_list}>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Службы доставки</div>
            <div className={styles.block_delivery_item_text}>
              Вы можете заказать доставку <b>любой транспортной компанией</b> на ваш выбор в любую точку мира. Возможность самовывоза необходимо уточнить у менеджера.
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Сохранность заказа</div>
            <div className={styles.block_delivery_item_text}>
              Не стоит волноваться о сохранности заказа, так как мы очень внимательно относимся к тому, чтобы выбранное вами оборудование не пострадало при транспортировке.<br />
              Все устройства тщательно упаковываются, в том числе и с использованием деревянной обрешетки. <b>Все заказы страхуются на полную стоимость.</b>
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Получение заказа</div>
            <div className={styles.block_delivery_item_text}>
              При получении заказа внимательно осмотрите оборудование и, в случае обнаружения повреждений, составьте акт на месте. Если при доставке происходят внеплановые задержки или форс-мажорные обстоятельства, сообщите нам об этом. <br />
              На скорость доставки влияет наличие товара на складе, а также загруженность транспортных компаний.
            </div>
          </div>
          <div className={styles.block_delivery_item}>
            <div className={styles.block_delivery_item_title}>Способы оплаты</div>
            <div className={styles.block_delivery_item_text}>
              У нас доступны различные способы оплаты, в том числе <a href="/defpay">рассрочка</a> и <a href="/lease">лизинг</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};