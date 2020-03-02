import React from 'react';
import FileManager from './FileManager/FileManager';
import CloudManager from './CloudManager/CloudManager';
import AppHeader from '../components/AppHeader/AppHeader';

const App = () => {
  return (
    <>
      <AppHeader />
      <div className="content">
        <FileManager />
        <CloudManager />
      </div>
    </>
  );
};

export default App;
