/**
 * App for PictaLearn!
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { RootStack } from './config/router';

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return (
      <AppContainer></AppContainer>
  );
};

export default App;
