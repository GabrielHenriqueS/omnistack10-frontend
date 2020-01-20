import React from 'react';

import {Container} from './styles'
import Main from '../Main'
import Sidebar from '../Sidebar'

function Dashboard() {
  return (
    <Container>
    <div id="app">
      <Sidebar />
      <Main />
    </div>
    </Container>
  );
}

export default Dashboard;
