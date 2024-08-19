import './App.css';
import Mobile from './MobileList/Mobile'
import Plusminus from './PlusMinus/Plusminus';
import Todolist from './ToDoList/Todolist';
import Form from './Form/Form'

function App() {
  return (
    <div className="App">
      <section><Mobile/></section>
      <section><Plusminus/></section>
      <section><Todolist/></section>
      <section><Form/></section>
    </div>
  );
}

export default App;
