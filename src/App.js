import React, {useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {birthdays} from './birthdayList';
import BirthdayItem from './birthdayItem';

function App() {
  const [birthdayList, setBirthdayList] = useState(birthdays); // array destructuring

  // this function returns the HTML returned from the .map function
  // for each birthday item
  const renderBirthdayList = () => {
    return birthdayList.map((item, index) => {
      return <BirthdayItem {...item} key={index} />;
    });
  };

  const onClearAll = () => {
    setBirthdayList([]);
  };

  return (
    <div className="App">
      <h3 className="text-secondary">{birthdayList.length} Birthday(s) today</h3>
      {renderBirthdayList()}
      <Button variant="secondary" block onClick={onClearAll}>
        Clear All Birthdays
      </Button>
    </div>
  );
}

export default App;
