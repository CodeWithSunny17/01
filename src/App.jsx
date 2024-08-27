import './App.css';
import Mobile from './MobileList/Mobile'
import Plusminus from './PlusMinus/Plusminus';
import Todolist from './ToDoList/Todolist';
import Form from './Form/Form'
import Fetch from './Fetch/Fetch'
import Calculator from './Calculator/Calculator'
import MultipleReturns from './UseEffect/MultipleReturns/MultipleReturns';
import Form2 from './Form2/Form2';

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
      <section>c</section>
      <section><Calculator/></section>
      
    </div>
  );
}

export default App;
