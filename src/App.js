import React, {useState, useEffect} from "react";
import List from './List';
import AddPanel from "./AddPanel";
import data from './people-data';

const months = {
  January: 1,
  February : 2,
  March : 3,
  April : 4,
  May : 5,
  June : 6,
  July : 7,
  August : 8,
  September : 9,
  October : 10,
  November : 11,
  December : 12,
}

function App() {
  const [people, setPeople] = useState(data);
  const [today, setToday] = useState([]);

  useEffect( () => {
    const today = new Date();
    const todaysBirthdays = people.filter(person => (today.getMonth()+1) === months[person.birthday.split(" ")[0]] && today.getDate().toString() === person.birthday.split(" ")[1]);
    setToday(todaysBirthdays);
    people.map( person => person.happyBDay = false);
    todaysBirthdays.map(person => person.happyBDay = true);
  },[people])

  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  const handleClearAll = () => {
    setPeople([]);
  }

  const handleSubmit = (name,day,img) => {
   
    if(name !== "" && day !== "" && img !== "")
    {
      console.log("adding " + name);
      
      let newPerson = {
          id: people.length + 1,
          name: name,
          birthday: day,
          happyBDay: false,
          image: img,
        }
    
      setPeople([...people, newPerson]);
    }
     
  }

  return (
    <main>
      <section className='card'>
        <h3 className='counter'> <span className='highlight'>{today.length}</span> birthdays today</h3>
        <List onClick={(id) => handleRemove(id)} people={people}/>
        <button onClick={handleClearAll} className='clear-btn'>Clear All</button>
        <AddPanel onSubmit={handleSubmit}/>
      </section>
    </main>
  );
}

export default App;
