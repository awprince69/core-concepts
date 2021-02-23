import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const style = {
    color: 'red'
  }
  const nayok = ['prince', 'shuvo', 'salman', 'razzak', 'sakib al hasan']
  const products = [
    { name: 'PhotoShop', price: '$200' },
    { name: 'illustrator', price: '$60.00' }
  ]
  const friendsZone = [
    { name: 'prince', age: '15' },
    { name: 'wadud', age: '18' },
    { name: 'abdul', age: '20' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>I am a react Person</h1>
        <Counter></Counter>
        <Users></Users>
        {
          friendsZone.map(friend => <Friends friendDetails={friend}></Friends>)
        }
        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Products product={pd}></Products>)
        }

        {/* {
          products.map(pd => <p>{pd.name}</p>)
        } */}
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h2>Display Count:{users.length} </h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Friends(props) { //function name should be written capital latter
  const style = {
    backgroundColor: 'purple',
    border: '2px solid cyan',
    borderRadius: '10px',
    height: '300px',
    width: '350px',
    margin: '15px',
    float: 'left'
  }
  const { name, age } = props.friendDetails
  return (
    <div style={style}>
      <h1>Name: {name}</h1>
      <h4>age:  {age} </h4>
    </div>
  )
}

function Products(props) {
  const style = {
    border: '2px solid gray',
    borderRadius: '10px',
    height: '250px',
    width: '200px',
    margin: '10px',
    backgroundColor: 'darkSlategray'
  }
  const { name, price } = props.product // object destructuring
  return (
    <div style={style}>
      <h3>{name}</h3>
      <h2> {price} </h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const style = {
    border: '2px solid yellow',
    margin: '10px',
    width: '400px'
  }
  return (
    <div style={style}>
      <h1>Name: {props.name} </h1>
      <h3>Profession: {props.job} </h3>
    </div>
  )
}

export default App;
