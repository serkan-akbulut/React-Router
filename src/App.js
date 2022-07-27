import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddQuotes from './pages/AddQuotes';
import { NoFound } from './pages/NoFound';
import Quates from './pages/Quotes'
import QuotesDetails from './pages/QuotesDetails'

function App() {
  return (
   
   <Layout>
  <Switch>
    <Route path='/' exact>
    <Redirect to='/quotes'></Redirect>
  </Route>
  <Route path='/quotes' exact>
    <Quates></Quates>
  </Route>
   <Route path='/quotes/:quoteId'>
   <QuotesDetails></QuotesDetails>
   </Route>
   <Route path='/new-quotes'><AddQuotes>
    </AddQuotes></Route>
    <Route path='*'><NoFound></NoFound></Route>
  </Switch>
  </Layout>
  
   
  );
}

export default App;
