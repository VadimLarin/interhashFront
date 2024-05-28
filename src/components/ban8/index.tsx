//import { useClient } from '/providers/react-query.tsx';


import styles from './ban8.module.scss';

export default function ban8() {
  
  {/* РАЗОБРАТЬСЯ ПОЧЕМУ НЕ РАБОТАЕТ
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };*/} 

  return (
    <div className={styles.main_b8}>
      <div className={styles.container}>
        <div className={styles.main_b8_title}>часто задаваемые вопросы</div>
        <div className={styles.main_b8_accordion}>
          <div className={styles.main_b8_accordion_item}>
            <div className={styles.main_b8_accordion_item_question}> {/*onClick={() => toggleAccordion(0)}> СЛАЙДЕР ДОДЕЛАТЬ*/}
              Что нужно знать о покупке оборудования?
              <span className={styles.ico_arrow}>
                <img
                  src="/assets/icons/ico_arrow.svg"
                />
              </span>
            </div>
            {/*{activeIndex === 0 && (*/}
              <div className={styles.main_b8_accordion_item_content}>
              тут должен быть ответ, но я его не знаю и в фигме его нет :/

              </div>
            {/*)}*/}
          </div>
          <div className={styles.main_b8_accordion_item}>
            <div className={styles.main_b8_accordion_item_question}> {/*onClick={() => toggleAccordion(1)}> СЛАЙДЕР ДОДЕЛАТЬ*/}
              Сколько денег нужно потратить?
              <span className={styles.ico_arrow}>
                <img
                  src="/assets/icons/ico_arrow.svg"
                />
              </span>
            </div>
            {/*{activeIndex === 1 && (*/}
              <div className={styles.main_b8_accordion_item_content}>
              тут должен быть ответ, но я его не знаю и в фигме его нет :/
              </div>
            {/*)}*/}
          </div>
          <div className={styles.main_b8_accordion_item}>
            <div className={styles.main_b8_accordion_item_question}> {/*onClick={() => toggleAccordion(2)}> СЛАЙДЕР ДОДЕЛАТЬ*/}
              Вопрос номер три?
              <span className={styles.ico_arrow}>
                <img
                  src="/assets/icons/ico_arrow.svg"
                />
              </span>
            </div>
            {/*{activeIndex === 2 && (*/}
              <div className={styles.main_b8_accordion_item_content}>
              тут должен быть ответ, но я его не знаю и в фигме его нет :/
              </div>
            {/*)}*/}
          </div>
        </div>
      </div>
    </div>
  );
};
