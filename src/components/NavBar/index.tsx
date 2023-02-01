import React, { useEffect, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";

import api from "../../utils/apiGetList";
import createStr from "../../utils/create";
import deleteStr from "../../utils/delete";
import updateStr from "../../utils/update";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styles from "./index.module.css";

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [toggle, setToggle] = useState(true);
  const [visible, setVisible] = useState(false);

  const { writeLS, readLS } = useLocalStorage();
  let localString = readLS("api");

  interface IeID {
    id: number;
    rowName: string;
  }

  const eID: IeID = {
    id: 33904,
    rowName: "ad3cdf45-6410-4736-8bbb-6fb8cdf0cf9e",
  };

  const url = "http://185.244.172.108:8081";

  useEffect(() => {
    api.then((list) => {
      setList(list);
    });
  }, [nav, localString]);

  function handleClick() {
    localString.length === 0 && writeLS("api", list);
  }

  function updateString() {
    updateStr(eID, url, list, setList, localString);
    writeLS("api", list);
    localString = readLS("api");
  }

  function deleteString() {
    deleteStr(eID, url, list, setList);
    writeLS("api", list);
    localString = readLS("api");
  }

  function createString() {
    createStr(eID, url, list, setList);
    writeLS("api", list);
    localString = readLS("api");
  }

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
                <img
                  src={require("../../image/article.svg").default}
                  alt="mySVG"
                  onMouseOver={() => {
                    setVisible(true);
                  }}
                  onClick={() => {
                    createString();
                  }}
                />
                {visible && (
                  <img
                    src={require("../../image/trash.svg").default}
                    alt="mySVG"
                    onMouseOut={() => {
                      setVisible(false);
                    }}
                    onClick={() => {
                      deleteString();
                    }}
                  />
                )}
              </p>
            </div>
            <div className={styles.title}>
              <p>Наименование работ</p>
              {toggle ? (
                <p
                  onDoubleClick={() => {
                    setToggle(false);
                  }}
                >
                  {list[0]?.rowName}
                </p>
              ) : (
                <p className={styles.pad}>
                  <input
                    type="text"
                    defaultValue={list[0]?.rowName}
                    className={styles.input}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateString();
                        setToggle(true);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                    onChange={(e) => {
                      list[0].rowName = e.target.value;
                    }}
                  />
                </p>
              )}
            </div>
            <div className={styles.basic}>
              <p>Основная з/п</p>
              {toggle ? (
                <p
                  onDoubleClick={() => {
                    setToggle(false);
                  }}
                >
                  {list[0]?.salary}
                </p>
              ) : (
                <p className={styles.pad}>
                  <input
                    type="text"
                    defaultValue={list[0]?.salary}
                    className={styles.input}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateString();
                        setToggle(true);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                    onChange={(e) => {
                      list[0].salary = e.target.value;
                    }}
                  />
                </p>
              )}
            </div>
            <div className={styles.equip}>
              <p>Оборудование</p>
              {toggle ? (
                <p
                  onDoubleClick={() => {
                    setToggle(false);
                  }}
                >
                  {list[0]?.equipmentCosts}
                </p>
              ) : (
                <p className={styles.pad}>
                  <input
                    type="text"
                    defaultValue={list[0]?.equipmentCosts}
                    className={styles.input}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateString();
                        setToggle(true);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                    onChange={(e) => {
                      list[0].equipmentCosts = e.target.value;
                    }}
                  />
                </p>
              )}
            </div>
            <div className={styles.overheads}>
              <p>Накладные расходы</p>
              {toggle ? (
                <p
                  onDoubleClick={() => {
                    setToggle(false);
                  }}
                >
                  {list[0]?.overheads}
                </p>
              ) : (
                <p className={styles.pad}>
                  <input
                    type="text"
                    defaultValue={list[0]?.overheads}
                    className={styles.input}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateString();
                        setToggle(true);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                    onChange={(e) => {
                      list[0].overheads = e.target.value;
                    }}
                  />
                </p>
              )}
            </div>
            <div className={styles.profit}>
              <p>Сметная прибыль</p>
              {toggle ? (
                <p
                  onDoubleClick={() => {
                    setToggle(false);
                  }}
                >
                  {list[0]?.estimatedProfit}
                </p>
              ) : (
                <p className={styles.pad}>
                  <input
                    type="text"
                    defaultValue={list[0]?.estimatedProfit}
                    className={styles.input}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateString();
                        setToggle(true);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                    onChange={(e) => {
                      list[0].estimatedProfit = e.target.value;
                    }}
                  />
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
