import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from '@contexts/AppContext';

import ItemDetails from '@pages/ItemDetails';
import ItemsResult from '@pages/ItemsResult';

import Globalstyle from '@styles/GlobalStyle';

import Search from '@components/Search';

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Globalstyle />
        <Search />

        <Switch>
          <Route exact path="/items" render={() => <ItemsResult />} />
          <Route exact path="/items/:id" render={() => <ItemDetails />} />
          <Route exact path="/" />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
