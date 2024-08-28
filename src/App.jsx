import './App.css';
import Mobile from './MobileList/Mobile'
import Plusminus from './PlusMinus/Plusminus';
import Todolist from './ToDoList/Todolist';
import Form from './Form/Form'
import Fetch from './Fetch/Fetch'
import Calculator from './Calculator/Calculator'
import MultipleReturns from './UseEffect/MultipleReturns/MultipleReturns';
import Form2 from './Form2/Form2';
import Form2UsingUseForm from './Form2/Form2UsingUseForm';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <section><Mobile/></section>
      <section><Plusminus/></section>
      <section><Todolist/></section>
      <section><Form/></section>
      <section><Fetch/></section>
      <section><MultipleReturns/></section>
      <section><Form2/></section>
      <section><Form2UsingUseForm/></section>
      <section><Calculator/></section>
      <section><ExpenseTracker/></section>
      
    </div>
  );
}

export default App;
