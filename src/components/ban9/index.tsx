
import styles from './ban9.module.scss';

export default function ban9() {
  return (
    <div className={styles.main_b9}>
        <div className={styles.container}>
            <div className={styles.main_b9_wrap}>
                <div className={styles.main_b9_contact}>
                    <div className={styles.main_b9_contact_title}>Мы готовы начать!</div>
                    <div className={styles.main_b9_contact_desc}>Заполните форму, чтобы получить консультацию</div>
                    <div className={styles.main_b9_contact_list}>
                        <div className={styles.main_b9_contact_item}>
                            <div className={styles.ico}><img src="/assets/icons/ico11.svg" alt="ico11" /></div>
                            <div className={styles.text}><a href="tel:+7 981 03-81-762">+7 981 03-81-762</a></div>
                        </div>
                        <div className={styles.main_b9_contact_item}>
                            <div className={styles.ico}><img src="/assets/icons/ico12.svg" alt="ico12" /></div>
                            <div className={styles.text}><a href="mailto:info@interhash.ru">info@interhash.ru</a></div>
                        </div>
                        <div className={styles.main_b9_contact_item}>
                            <div className={styles.ico}><img src="/assets/icons/ico13.svg" alt="ico13" /></div>
                            <div className={styles.text}>г. Москва, 1-й Красногвардейский пр-д, 22 стр. 1</div>
                        </div>
                    </div>
                </div>
                <div className={styles.main_b9_form}>
                    <div className={styles.main_b9_form_title}>А Вы?</div>
                        <div className={styles.contact_form}>
                    <p>
                        <span className={styles.f_form_control_wrap}>
                        <input
                            size={40}
                            className={styles.f_form_control}
                            placeholder="Ваше имя"
                            type="text"
                        />
                        </span>
                    </p>
                    <p>
                        <span className={styles.f_form_control_wrap}>
                        <input
                            size={40}
                            className={styles.f_form_control}
                            placeholder="+7 (999) 999-99-99 *"
                            type="text"
                        />
                        </span>
                    </p>
                    <p>
                        <span className={styles.f_form_control_wrap}>
                        <span className={styles.f_acceptance}>
                            <span className={styles.f_list_item}>
                            <label>
                                <input type="checkbox" />
                                <span className={styles.f_list_item_label}>
                                Я ознакомлен с условиями Пользовательского соглашения
                                </span>
                            </label>
                            </span>
                        </span>
                        </span>
                    </p>

                        <a href="/form" className={styles.btn} style={{ cursor: 'pointer' }}>
                            ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
);
};