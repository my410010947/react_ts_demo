import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Counter from './counter';
import Son from './son';
import MyMemo from './myMemo';

const MyContex = createContext({});

function App() {
  const value = { name: 'WENBIN', AGE: 20 };
  const plus100 = (num: number) => {
    if (num < 100) {
      return num + 100;
    }
    else {
      return num - 100;
    }
  }
  return (
    <MyContex.Provider value={value}>
      <div>this is app page, let's learn react together</div>
      <div className="App" onClick={() => {
        /* istanbul ignore next */
        console.log('abc');
      }}>
        {plus100(123)}
        {plus100(50)}
        {/* <Counter/>
      <Parent children={<Son/>} /> */}
        <MyMemo />
      </div>
    </MyContex.Provider >
  );
}


export { MyContex };
export default App;
