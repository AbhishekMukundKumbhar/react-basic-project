import Nav from './MyComponent/Navigation'
import { Footer } from './MyComponent/Footer'
import { Todo } from './MyComponent/Todo'
import { AddTodo } from './MyComponent/AddTodo'
import About from './MyComponent/About'
import {
  useEffect,
  useState
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  let init;
  if (localStorage.getItem('todo') === null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem('todo'))
  }
  //useState hook : once the data inside the array changes the components will re-render
  //if we decalr arry noramnly without using useState hook then components will not re-render so newly added data will not reflect
  let [todolist, setTodolist] = useState(init);
  let [filtered, setFiltered] = useState([]);


  function addTodo(work, desc) {
    let id;
    if (todolist.length !== 0) {
      id = todolist.length + 1;
    }
    else {
      id = 1;
    }
    let todo = {
      id,
      work,
      desc
    }
    setTodolist([...todolist, todo])
    // localStorage.setItem("todo",JSON.stringify(todolist));
  }

  function onDelete(id) {
    console.log(`onclick is clicked ${id}`)
    //when this methods sets array, elemnts will re-render again
    setTodolist(todolist.filter(todo => (todo.id !== id)))
    // localStorage.setItem("todo",JSON.stringify(todolist));
  }

  function onSearch(value){
    
    if(value !=="")
    {
      setFiltered(todolist.filter(todo =>(todo.work.toLowerCase().includes(value.toLowerCase()))))
    }
    else{
      if(filtered.length!==0){
        setFiltered([]);
      }
    }

  }

  //use effect hook will be get called by each time when specified array cahnges i.e todolist here
  useEffect(() => {
    console.log('useeffect is called');
    localStorage.setItem("todo", JSON.stringify(todolist));
  }, [todolist]);


  return (
    <div className="App">
      <Router>
        <Nav onSearch = {onSearch}/>
        <Routes>
          <Route exact path='/' element = {<><AddTodo addTodo={addTodo} /><Todo todolist={todolist} filtered = {filtered} onDelete={onDelete} /></>} />
          <Route exact path='/about' element = {<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
