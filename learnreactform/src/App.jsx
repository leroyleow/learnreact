import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// import NameForm from './components/Forms'
import GroceryList from './components/grocerylist/compents/GroceryList'
import GroceryNav from './components/grocerylist/compents/Grocerynav';
import GroceryFooter from './components/grocerylist/compents/GroceryFooter';
import GroceryForm from './components/grocerylist/compents/GroceryForm';


function App() {
  // const groceries = [
  //   {id:Date.now(), text: "Bananas", bought: false},
  //   {id:Date.now(), text: "Pears", bought: false},
  //   {id:Date.now(), text: "Apples", bought: false}
  // ];

  const [groceryitems, setGroceryItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState("");

  function handleOnChange (e) {
    setGroceryInput(e.target.value);
  }

  function handleOnSubmit (e) {
    e.preventDefault();

    if(!groceryInput.trim()) return;

    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false
    };
    
    setGroceryItems([...groceryitems, newGrocery]);
    setGroceryInput('');

  }

  const toggleBought = (id) => {
    //console.log("Toggle Item", id);
    const updatedItems = groceryitems.map((item)=> {
      if(item.id === id){
        return {...item, bought: !item.bought}
      }
      return item;
    })

    setGroceryItems(updatedItems);
  };

  function handleRemoveItem (id){
    const remainitems = groceryitems.filter((item)=> item.id !== id);
    setGroceryItems(remainitems);
  }

  const totalItems = groceryitems.length;
  const totalBought = groceryitems.filter((item)=> item.bought).length

  return (
    // <div className="container pt2">
    //   <div className="row">
    //       {/* <NameForm /> */}
    //   </div>
    // </div>
    <>
      <GroceryNav />
      <GroceryForm itemtext={groceryInput}  handleOnChange={handleOnChange} handleSubmit={handleOnSubmit} />
      <GroceryList Items={groceryitems} handleOnToggle={toggleBought} handleRemoveItem={handleRemoveItem}/>
      <GroceryFooter totalBought={totalBought} totalItems={totalItems}/>
    </>
  )
}

export default App
