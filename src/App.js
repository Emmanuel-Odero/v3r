import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/home";
import contact from "./components/Contact";
import search from "./components/Search";
import project from "./components/project";
import NavBar from "./components/NavBar";
import blog from "./components/Blog";


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route component={home}path='/' exact/>
      <Route component={contact}path='/Contact'/>
      <Route component={search}path='/Search'/>
      <Route component={project}path='/project'/>
      <Route component={blog}path='/Blog'/>

    </Switch>
    </BrowserRouter>
  )
}

export default App;
