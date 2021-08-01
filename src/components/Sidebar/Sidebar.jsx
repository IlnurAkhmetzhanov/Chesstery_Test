import React, { useEffect, useRef, useCallback } from "react";

import "./Sidebar.scss";

export const Sidebar = ({ toggleOpen, sidebarIsOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const innerWidthWhenSidebarIsHidden = 1100;
      if (window.innerWidth <= innerWidthWhenSidebarIsHidden) toggleOpen(false);
      else toggleOpen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  // useEffect(() => {
  //   const node = sidebarRef.current;
  //   if (node) {
  //     node.onmouseenter = () => node.focus();
  //   }
  // }, [sidebarIsOpen]);

  const handleClose = () => toggleOpen((sidebarIsOpen) => !sidebarIsOpen);

  const renderAccountBalance = useCallback(
    () => <p className="Sidebar__account-money item--text">100</p>,
    []
  );

  const renderUserImage = useCallback(() => {
    return (
      <>
        <img
          className="Sidebar__icon account-image"
          src={require("./assets/anonymous.svg").default}
          alt="account"
        />
        <p className="Sidebar__account-name item--text">Усманов Азат</p>
      </>
    );
  }, []);

  const renderEnergy = useCallback(
    () => <p className="Sidebar__account-energy item--text">Кабинет</p>,

    []
  )

  const renderDrawer = () => (
    <div className="Sidebar-outer-wrapper">
      <div
        tabIndex={1}
        className={
          sidebarIsOpen ? "Sidebar Sidebar--opened" : "Sidebar Sidebar--closed"
        }
        ref={sidebarRef}
        onBlur={
          window.innerWidth < 1100
            ? (event) =>
                //@ts-ignore
                !event.relatedTarget?.classList.value.includes("nav-link-reset")
                  ? toggleOpen(false)
                  : null
            : () => {}
        }
      >
        <div className="Sidebar-divider divider--right" />
        <div className="Sidebar-wrapper">
          <div className="Sidebar__logo nav-link-reset" to="/" exact>
            <img
              className="Sidebar__logo-image"
              src={
                sidebarIsOpen
                  ? require("./assets/logo.svg").default
                  : require("./assets/logo-short.svg").default
              }
              alt="logo"
            />
          </div>
          <div className="Sidebar-divider" />
          {localStorage.token && (
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--premium">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("../Sidebar/assets/premium.svg").default}
                  alt="premium"
                />
                <p className="Sidebar__navigation-title item--text text--premium">
                  На премиум
                </p>
              </li>
            </div>
          )}
          <ul className="Sidebar__account-list">
            <div className="nav-link-reset">
              <li className="Sidebar__account-item item--fixed">
                {renderUserImage()}
              </li>
            </div>
            <div className="item--wrapper">
              <li className="Sidebar__account-item">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/energy.svg").default}
                  alt="energy"
                />
                {renderEnergy()}
              </li>
              <li className="Sidebar__account-item">
                <img
                  className="Sidebar__icon  margin--no"
                  src={require("./assets/money.svg").default}
                  alt="balance"
                />
                {renderAccountBalance()}
              </li>
            </div>
          </ul>
          <div className="Sidebar-divider" />
          <ul className="Sidebar__navigation-list">
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--hover">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/course.svg").default}
                  alt="course"
                />
                <p className="Sidebar__navigation-title item--text">Курс</p>
              </li>
            </div>
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--hover">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/play.svg").default}
                  alt="play"
                />
                <p className="Sidebar__navigation-title item--text">Играть</p>
              </li>
            </div>
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--hover">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/task.svg").default}
                  alt="tasks"
                />
                <p className="Sidebar__navigation-title item--text">Задачи</p>
              </li>
            </div>
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--hover">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/progress.svg").default}
                  alt="progress"
                />
                <p className="Sidebar__navigation-title item--text margin-b--no">
                  Прогресс
                </p>
              </li>
            </div>
            <div className="nav-link-reset">
              <li className="Sidebar__navigation-item item--wrapper item--hover">
                <img
                  className="Sidebar__icon margin--no"
                  src={require("./assets/blog.svg").default}
                  alt="blog"
                />
                <p className="Sidebar__navigation-title item--text">Блог</p>
              </li>
            </div>
          </ul>
          <div className="Sidebar__bottom-wrapper">
            <div className="Sidebar-divider" />
            <ul className="Sidebar__bottom-list">
              <li
                className="Sidebar__bottom-item item--wrapper item--hover"
                onClick={handleClose}
              >
                <div className="image-wrapper color--blue">
                  <img
                    className={`arrow--${!sidebarIsOpen}`}
                    src={require("./assets/arrow.svg").default}
                    alt="collapse/expand"
                  />
                </div>
                <p className="item--text">Свернуть</p>
              </li>
              {localStorage.token && (
                <li className="Sidebar__bottom-item item--wrapper item--hover">
                  <div className="image-wrapper">
                    <img
                      src={require("./assets/logout.svg").default}
                      alt="logout"
                    />
                  </div>
                  <p className="item--text">Выйти</p>
                </li>
              )}
            </ul>
            {!localStorage.token && (
              <ul className="Sidebar__sign-list item--wrapper">
                <li className="Sidebar__bottom-item">
                  <div className="image-wrapper">
                    <img
                      src={require("./assets/login.svg").default}
                      alt="login"
                      className="Sidebar__icon margin--no"
                    />
                  </div>
                  <p className="item--text">Войти</p>
                </li>
                <li className="Sidebar__bottom-item">
                  <div className="image-wrapper">
                    <img
                      src={require("./assets/signup.svg").default}
                      alt="signup"
                      className="Sidebar__icon margin--no"
                    />
                  </div>
                  <p className="item--text">Регистрация</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return <>{renderDrawer()}</>;
};
