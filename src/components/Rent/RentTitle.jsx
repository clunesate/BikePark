import React, { useState } from 'react';
import Image1 from '../../images/image 14.png';
import Image2 from '../../images/image 12.png';
import Image3 from '../../images/image 13.png';

function RentTitle() {
  const [rentPeriod, setRentPeriod] = useState('days');

  return (
    <div className="RentTitle">
      <div className="RentTitle__Row">
        <div className="RentTitle__Col">
          <h1 className="RentTitle__Label">Аренда велосипедов c доставкой</h1>
        </div>
        <div className="RentTitle__Col">
          <div className="RentTitle__TrapezoidElement">
            <div className="RentTitle__TrapezoidContent">
              <div className="RentTitle__TrapezoidImage">
                <img src={Image2} alt="Провод" />
              </div>
              <div className="RentTitle__TrapezoidTitle">
                <p className="RentTitle__TrapezoidLabel">Шлем</p>
                <p className="RentTitle__TrapezoidPrice">Бесплатно</p>
              </div>
            </div>
          </div>
          <div className="RentTitle__TrapezoidElement">
            <div className="RentTitle__TrapezoidContent">
              <div className="RentTitle__TrapezoidImage">
                <img src={Image3} alt="Провод" />
              </div>
              <div className="RentTitle__TrapezoidTitle">
                <p className="RentTitle__TrapezoidLabel">Фонарик</p>
                <p className="RentTitle__TrapezoidPrice">Бесплатно</p>
              </div>
            </div>
          </div>
          <div className="RentTitle__TrapezoidElement">
            <div className="RentTitle__TrapezoidContent">
              <div className="RentTitle__TrapezoidImage">
                <img src={Image1} alt="Провод" />
              </div>
              <div className="RentTitle__TrapezoidTitle">
                <p className="RentTitle__TrapezoidLabel">Замок</p>
                <p className="RentTitle__TrapezoidPrice">Бесплатно</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="RentTitle__Row">
        <div className="FormGroup">
          <label>Тип аренды</label>
          <div className="FormGroup__Radio">
            <div className="FormGroup__Radio-item">
              <input
                id="radio-1"
                type="radio"
                name="radio"
                value="days"
                checked={rentPeriod === 'days'}
                onChange={(e) => setRentPeriod(e.target.value)}
              />
              <label htmlFor="radio-1">По дням</label>
            </div>
            <div className="FormGroup__Radio-item">
              <input
                id="radio-2"
                type="radio"
                name="radio"
                value="hours"
                checked={rentPeriod === 'hours'}
                onChange={(e) => setRentPeriod(e.target.value)}
              />
              <label htmlFor="radio-2">2 часа</label>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="FormGroup" style={{ flexGrow: 1 }}>
            <label>Дата и время начала</label>
            <select className="FormGroup__Select">
              <option className="FormGroup__Select-Item" value="24.07.21 12:00">
                24.07.21 12:00
              </option>
            </select>
          </div>

          <span
            style={{
              border: '2px solid #000000',
              width: '13px',
              height: 0,
              margin: '0 14px',
              marginTop: '37px',
            }}
          />

          <div className="FormGroup" style={{ flexGrow: 1 }}>
            <label>Дата и время конца</label>
            <select className="FormGroup__Select">
              <option className="FormGroup__Select-Item" value="25.07.21 12:00">
                25.07.21 12:00
              </option>
            </select>
          </div>
        </div>

        <div className="FormGroup">
          <label>Доставка</label>
          <select className="FormGroup__Select">
            <option className="FormGroup__Select-Item" value="1">
              По адресу
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default RentTitle;
