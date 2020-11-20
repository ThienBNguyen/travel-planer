import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import FlightTab from './SearchBarTab/FlightTab';
import CarTab from './SearchBarTab/CarTab';
import HotelTab from './SearchBarTab/HotelTab';
import CruisesTab from './SearchBarTab/CruisesTab';
export default function SearchBarForm() {
  const [key, setKey] = useState('flight');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="nav-tabs"
    >
      <Tab eventKey="flight" title="Flight">
        <FlightTab />
      </Tab>
      <Tab eventKey="hotel" title="Hotel">
        <HotelTab />
      </Tab>
      <Tab eventKey="car rent" title="Car Rent">
        <CarTab />
      </Tab>
      <Tab eventKey="Cruises" title="Cruilses">
        <CruisesTab />
      </Tab>
    </Tabs>
  );
}

{
  /* <li className="active">
          <a data-toggle="tab" href="#flight">
            <i className="flaticon-plane" /> Flight
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#hotel">
            <i className="flaticon-resort" /> Hotel
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#car">
            <i className="flaticon-car" /> Car Rent
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#cruises">
            <i className="flaticon-boat" /> Cruises
          </a>
        </li> */
}
