import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Meal from './Components/Meal/Meal';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order';
import Restaurant from './Components/Restaurant/Restaurant';
function App() {
  return (
    <div >
      {/* <Restaurant></Restaurant> */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Restaurant></Restaurant>
          </Route>
          <Route exact path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>
          <Route path='/meal/:mealId'>
            <Meal></Meal>
          </Route>
          <Route path='/orders'>
            <Order></Order>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/meal/:mealId'>
            <Meal></Meal>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
