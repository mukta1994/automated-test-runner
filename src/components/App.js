import React,{ useState } from 'react';
import '../styles/App.scss';
import '../styles/tests.scss';
import TestCases from "./Tests/Tests";

function App() {
  
  const makeDummyTest = () => {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;

    return function callback(cb) {
        window.setTimeout(() => {
            cb(testPassed)
        }, delay);
    };
};


const [tests,setTests] = useState([
    { description: "uploads go in both directions", run: makeDummyTest() },
    { description: "PDFs are adequately waterproof", run: makeDummyTest() },
    { description: "videos are heated to 12,000,000 Kelvin", run: makeDummyTest() },
    { description: "subpixels can go rock climbing", run: makeDummyTest() },
    { description: "images are squarer than traffic cones", run: makeDummyTest() },
    { description: "metaproperties don't go too meta", run: makeDummyTest() },
]);

  return (
    <div className="App">
      <header className="App-header">
       <h2 className="heading"> Automated Test Runner</h2>
       <TestCases tests={tests} resetTestCases={(tests)=>setTests(tests)} ></TestCases>

      </header>

    </div>
  );
}

export default App;
// #90bec5

// cadetblue