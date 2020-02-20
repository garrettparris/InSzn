import React from 'react';
import Header from './components/Header.js';
import ResponsiveDrawer from './components/Drawer.js';
import CarouselTable from './components/CarouselTable.js';
function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <div className="mx-auto mt-5">

          <div className="mt-5 mx-auto w-25"><Header /></div>
          <div className="mt-5 mx-auto w-50"><CarouselTable /></div>
      </div>
    </div>
  );
}

export default App;
