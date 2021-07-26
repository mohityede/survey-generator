import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import UserDetails from './pages/createSurvey/userDetails';
import QuestionDetails from './pages/createSurvey/questionDetails';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/create/:id/quetions" component={QuestionDetails} />
          <Route path="/create/userDetails" component={UserDetails} />
          <Route path="/not-found" component={PageNotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

function PageNotFound() {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Page Not Found</h2>
    </>
  );
}
