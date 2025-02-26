import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  return (
    <AuthProvider>
      <AuthScreen />
    </AuthProvider>
  );
};

export default App;
