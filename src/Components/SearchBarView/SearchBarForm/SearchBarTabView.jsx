import React from 'react';
import FlightTab from './SearchBarTab/FlightTab';
import CarTab from './SearchBarTab/CarTab';
import HotelTab from './SearchBarTab/HotelTab';
import CruisesTab from './SearchBarTab/CruisesTab';
export default function SearchBarTab() {
  return (
    <div className="tab-content">
      <FlightTab />
      <HotelTab />
      <CarTab />
      <CruisesTab />
    </div>
  );
}
