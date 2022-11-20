import React from 'react';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { ReactComponent as Person } from '../../images/Person.svg';

function Header() {
  return (
    <header className="Header">
      <Logo />
      <nav className="NavBar">
        <ul className="NavBar__List">
          <li className="NavBar__ListItem">О нас</li>
          <li className="NavBar__ListItem NavBar__ListItem_active">Аренда</li>
          <li className="NavBar__ListItem">Доставка</li>
          <li className="NavBar__ListItem">Где кататься</li>
          <li className="NavBar__ListItem">Контакты</li>
        </ul>
      </nav>
      <p className="Header__PhoneNumber">+971 52 563 4064</p>
      <Person />
      <button type="button" className="Header__FeedbackBtn">
        FEEDBACK
      </button>
      <div className="TimeBlock">
        <p className="TimeBlock__Time">2:50 PM</p>
        <p className="TimeBlock__Country">Time in Dubai</p>
      </div>
      <div className="LanguageSwitcher">
        <p className="LanguageSwitcher__Text">RU</p>
        <span className="LanguageSwitcher__Triangle" />
      </div>
    </header>
  );
}

export default Header;
