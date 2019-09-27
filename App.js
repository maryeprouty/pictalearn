/**
 * App for PictaLearn!
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { RootStack } from './config/router';
import { initializeStore } from 'fluxible-js';

const AppContainer = createAppContainer(RootStack);

// Initializes context for user persistence
initializeStore({
  initialStore: {
    user: {
      email: 'Nobody'
    },
    anotherState: 'value'
  }
});

const App = () => {
  return (
      <AppContainer></AppContainer>
  );
};

export default App;
