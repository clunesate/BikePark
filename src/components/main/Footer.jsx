import React from 'react';
import { ReactComponent as FaceBook } from '../../images/facebook.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__Content">
        <div className="Footer__ContentCol">
          <ul className="Footer__List">
            <li className="Footer__ListElement Footer__ListElement_title">Аренда велосипедов</li>
            <li className="Footer__ListElement Footer__ListElement_mt-6">Алюминий</li>
            <li className="Footer__ListElement Footer__ListElement_mt-6">Карбон</li>
            <li className="Footer__ListElement Footer__ListElement_mt-6">Горные/городские</li>
            <li className="Footer__ListElement Footer__ListElement_mt-6">Городские эконом</li>
          </ul>
          <p className="Footer__Copyright">© BikePark, 2021</p>
        </div>
        <div className="Footer__ContentCol">
          <p className="Footer__Copyright">Политика конфиденциальности</p>
        </div>
        <div className="Footer__ContentCol">
          <ul className="Footer__List Footer__List_reverse">
            <li className="Footer__ListElement Footer__ListElement_title">Правила</li>
            <li className="Footer__ListElement Footer__ListElement_title">Отзывы</li>
            <li className="Footer__ListElement Footer__ListElement_title">Контакты</li>
            <li className="Footer__ListElement Footer__ListElement_title">Обратная связь</li>
          </ul>
          <div className="Footer__SocietyIcons">
            <FaceBook />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
