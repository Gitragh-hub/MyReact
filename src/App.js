
import './App.css';
import { useState } from "react";
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';


function App() {
  const [items, setItems] = useState( JSON.parse( localStorage.getItem('shoppingList')));
  
const [newItem, setNewItem] = useState('');
  
const [search, setSearch] = useState('');
const addItem =(item) =>{
  const id = items.length ? items[items.length - 1].id+1 : 1;
  const myNewItem = {id,checked:false, item};
  const listItems =[...items,myNewItem];
  setAndSaveItems(listItems);
}


const setAndSaveItems = (newItems) =>{
  setItems(newItems);
  localStorage.setItem('shoppingList', JSON.stringify(newItems))
}
const handleCheck =(id) => {
  const listItems = items.map((item) => item.id === id? { ...item,
    checked: !item.checked}: item);

    setItems(listItems);
    //localStorage.setItem('shoppingList', JSON.stringify(listItems));
    setAndSaveItems(listItems);
};

const handleDelete=(id) =>{
  const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    setAndSaveItems(listItems);
};

const handleSubmit=(e) =>{
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('');
  
};
  return (
    <div className="App">
     <Header title="Shopping"/>
     <AddItem 
     newItem ={newItem}
     setNewItem ={setNewItem}
     handleSubmit = {handleSubmit}
     />
      <SearchItem 
     search ={search}
     setSearch ={setSearch}
     
     />
     <Content
      items={items.filter(item => ((item.item).toLowerCase()).includes
        (search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      length={items.length}
     />
    </div>
  );
}

export default App;
