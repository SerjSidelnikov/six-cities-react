import * as React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from "../../consts";

interface Props {
  userEmail?: string;
  onUserEmailClick: () => void;
}

const Header: React.FC<Props> = ({userEmail, onUserEmailClick}: Props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={userEmail ? AppRoute.FAVORITES : AppRoute.LOGIN}
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  {userEmail ? (
                    <span
                      className="header__user-name user__name"
                      onClick={onUserEmailClick}
                    >
                      {userEmail}
                    </span>
                  ) : (
                    <span className="header__login">Sign in</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
