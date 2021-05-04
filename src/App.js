import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {birthdays} from './birthdayList';
import BirthdayItem from './birthdayItem';

function App() {
  const renderBirthdayList = () => {
    return birthdays.map((item, index) => {
      return <BirthdayItem {...item} key="index" />;
    });
  };
  return (
    <div className="App">
      <h3 className="text-secondary">0 Birthdays today</h3>
      {renderBirthdayList}
      <Button variant="primary" block>
        Clear All Birthdays
      </Button>
    </div>
  );
}

export default App;
