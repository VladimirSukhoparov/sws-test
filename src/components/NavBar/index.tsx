import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";

import api from "../../utils/apiGetList";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styles from "./index.module.css";

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState("");
  const [list, setList] = useState();
  const { writeLS, readLS } = useLocalStorage();

  let localString = readLS("api");
  let arr = [null];
  let objString=localString.reduce((a:{}, b:{}) => Object.assign(a, b), {})
    
  const handleClick = () => {
    if (!list || localString === arr) {
      api.then((list) => {
        setList(list);
        writeLS("api", list);
      });
    }
  };
    
  return (
    <div className={styles.nav}>
      <div className={styles.box}>
        <div className={styles.bord1}>
          <button
            onClick={() => setActive(true)}
            className={!!active ? `${styles.btn} ${styles.active}` : styles.btn}
          >
            <div className={styles.item}>
              <pre className={styles.name}>Название проекта</pre>
              <pre className={styles.abbr}>Аббревиатура</pre>
            </div>

            <div>
              <KeyboardArrowDownIcon
                className={`${styles.icon} ${styles.arrow}`}
              />
            </div>
          </button>
        </div>
        <div className={styles.bord2}>
          <span className={styles.full}>{nav}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.navbar}>
          {active && (
            <ul>
              <li onClick={() => setNav("По проекту")}>
                <DashboardIcon className={styles.navIcon} />
                По проекту
              </li>
              <li onClick={() => setNav("Объекты")}>
                <DashboardIcon className={styles.navIcon} />
                Объекты
              </li>
              <li onClick={() => setNav("Рабочая документация")}>
                <DashboardIcon className={styles.navIcon} />
                РД
              </li>
              <li onClick={() => setNav("МТО")}>
                <DashboardIcon className={styles.navIcon} />
                МТО
              </li>
              <li
                onClick={() => {
                  setNav("Строительно-монтажные работы");
                  handleClick();
                }}
              >
                <DashboardIcon className={styles.navIcon} />
                СМР
              </li>
              <li onClick={() => setNav("График")}>
                <DashboardIcon className={styles.navIcon} />
                График
              </li>
              <li onClick={() => setNav("МиМ")}>
                <DashboardIcon className={styles.navIcon} />
                МиМ
              </li>
              <li onClick={() => setNav("Рабочие")}>
                <DashboardIcon className={styles.navIcon} />
                Рабочие
              </li>
              <li onClick={() => setNav("Капитальные вложения")}>
                <DashboardIcon className={styles.navIcon} />
                Капвложения
              </li>
              <li onClick={() => setNav("Бюджет")}>
                <DashboardIcon className={styles.navIcon} />
                Бюджет
              </li>
              <li onClick={() => setNav("Финансирование")}>
                <DashboardIcon className={styles.navIcon} />
                Финансирование
              </li>
              <li onClick={() => setNav("Панорамы")}>
                <DashboardIcon className={styles.navIcon} />
                Панорамы
              </li>
              <li onClick={() => setNav("Камеры")}>
                <DashboardIcon className={styles.navIcon} />
                Камеры
              </li>
              <li onClick={() => setNav("Поручения")}>
                <DashboardIcon className={styles.navIcon} />
                Поручения
              </li>
              <li onClick={() => setNav("Контрагенты")}>
                <DashboardIcon className={styles.navIcon} />
                Контрагенты
              </li>
            </ul>
          )}
        </div>
        {nav && (
          <div className={`${styles.table} ${styles.grid}`}>
            <div className={styles.level}>
              <p>Уровень</p>
              <p>
                <img src={require("../../image/article.svg").default} alt="mySVG"/> 
                <img src={require("../../image/trash.svg").default} alt="mySVG"/> 
              </p>
            </div>
            <div className={styles.title}>
              <p>Наименование работ</p>
              <p>
                {objString['rowName']}
              </p>
            </div>
            <div className={styles.basic}>
              <p>Основная з/п</p>
              <p>{objString['salary']}</p>
            </div>
            <div className={styles.equip}>
              <p>Оборудование</p>
              <p>{objString['equipmentCosts']}</p>
            </div>
            <div className={styles.overheads}>
              <p>Накладные расходы</p>
              <p>{objString['overheads']}</p>
            </div>
            <div className={styles.profit}>
              <p>Сметная прибыль</p>
              <p>{objString['estimatedProfit']}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
