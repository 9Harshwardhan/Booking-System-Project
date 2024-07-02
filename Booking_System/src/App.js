import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './frontend/components/Home';
import Login from './frontend/components/Login';
import Register from './frontend/components/Register';
import MovieList from './frontend/components/MovieList';
import SeatSelection from './frontend/components/SeatSelection';
import Payment from './frontend/components/Payment';
import BookingConfirmation from './frontend/components/BookingConfirmation';
import NotFound from './frontend/components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/movies" component={MovieList} />
          <Route path="/seat-selection/:movieId" component={SeatSelection} />
          <Route path="/payment/:bookingId" component={Payment} />
          <Route path="/confirmation/:bookingId" component={BookingConfirmation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
