
import styles from './DefpayPage.module.css';

export default function DefpayPage() {
  return (
    <div className={styles.page_service}>
      <div className={styles.container}>
        <div className={styles.service_top_block}>
          <div className={styles.service_top_block_title}>
            Оборудование для майнинга в рассрочку
          </div>
          <div className={styles.service_top_block_text}>
            Майнинг – это доходный бизнес, несмотря на все события, которые происходят на рынке. Тем не менее, как и любой другой бизнес, он требует вложений. Поэтому взять майнинг оборудование в рассрочку является отличным решением.
          </div>
          <div className={styles.service_top_block_btn}>
            <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>
              оставить заявку
            </a>
          </div>
        </div>
        
        <div className={styles.service_profitably}>
          <div className={styles.service_profitably_title}>почему с нами выгодно</div>
          <div className={styles.service_profitably_list}>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico31.svg" />
                </div>
                <div className={styles.title}>Выгодное предложение</div>
              </div>
              <div className={styles.service_profitably_item_text}>Удобные условия сотрудничества</div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico32.svg" />
                </div>
                <div className={styles.title}>Большой выбор асиков</div>
              </div>
              <div className={styles.service_profitably_item_text}>Оборудование в наличии и под заказ</div>
            </div>
            <div className={styles.service_profitably_item}>
              <div className={styles.service_profitably_item_top}>
                <div className={styles.icon}>
                  <img src="/assets/icons/ico33.svg" />
                </div>
                <div className={styles.title}>Техподдержка</div>
              </div>
              <div className={styles.service_profitably_item_text}>Профессиональная поддержка клиентов в гарантийный и послегарантийный период</div>
            </div>
          </div>
        </div>
        
        <div className={styles.service_text_block}>
          <div className={styles.service_text_block_title}>Для кого подходит <br />предложение</div>
          <div className={styles.service_text_block_text}>
            За последний год устройства для майнинга серьезно потеряли в цене. Тем не менее, они все еще продолжают стоить дорого. Учитывая то, что сложность майнинга постоянно растет, а конкуренция увеличивается, вам необходимо не одно устройство, а целая ферма. <br />
            Таким образом, расходы увеличиваются в несколько раз, поэтому asic в рассрочку избавит вас от огромных вложений уже на стартовом этапе. Вы сможете спокойно заниматься вашим бизнесом, понимая, что оплачиваете комфортные для вас платежи ежемесячно. А оборудование остается с вами и продолжает работать.<br />
            Возможность взять асики в рассрочку подойдет для:
            <ul>
              <li>нового бизнеса;</li>
              <li>тех, кому необходим большой объем оборудования;</li>
              <li>майнеров, у которых нет сразу крупной суммы на начальном этапе.</li>
            </ul>
            В interhash.ru работают настоящие профессионалы. Мы не понаслышке знаем, с какими проблемами могут столкнуться те, кто только начинает свой путь в добыче криптовалют или принял решение о расширении мощностей. Поэтому мы всегда предлагаем действенные решения. Майнинг оборудование в рассрочку поможет вам в создании эффективной бизнес-модели.
          </div>
        </div>
        
        <div className={styles.service_text_block}>
          <div className={styles.service_text_block_title}>процесс предоставления <br />услуги</div>
          <div className={styles.service_text_block_list}>
            <div className={styles.service_text_block_list_item}>
              <div className={styles.service_text_block_list_item_num}>1</div>
              <div className={styles.service_text_block_list_item_text}>Определиться с типом и моделью асика</div>
            </div>
            <div className={styles.service_text_block_list_item}>
              <div className={styles.service_text_block_list_item_num}>2</div>
              <div className={styles.service_text_block_list_item_text}>Собрать минимальный пакет документов</div>
            </div>
            <div className={styles.service_text_block_list_item}>
              <div className={styles.service_text_block_list_item_num}>3</div>
              <div className={styles.service_text_block_list_item_text}>Обратиться к нашим специалистам и подписать договор</div>
            </div>
            <div className={styles.service_text_block_list_item}>
              <div className={styles.service_text_block_list_item_num}>4</div>
              <div className={styles.service_text_block_list_item_text}>Получить оборудование и начать работу</div>
            </div>
          </div>
          <div className={styles.service_text_block_text}>
            Мы уже позаботились о том, чтобы цена на устройства была самой приятной, так как мы работаем напрямую с производителями. Также мы всегда готовы быть на связи и оказывать консультационную и иную поддержку на всех этапах.<br /><br />
            В interhash.ru вам не просто продадут оборудование, но и помогут с выбором, настройкой, а также доставкой в любую точку мира. Вы можете быть уверены в том, что наши сотрудники всегда на связи готовы помочь.<br /><br />
            Мы предлагаем вам огромный выбор моделей, среди которых вы обязательно найдете то, что нужно именно вам. Наша команда нацелена на длительное сотрудничество с каждым клиентом, поэтому вы можете быть уверены в том, что вам предлагают лучшие условия.
          </div>
        </div>
      </div>
    </div>
  );
};