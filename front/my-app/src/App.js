import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  const [DataSetArr, setDataSet] = React.useState([{
    description: 'desc',
    name: 'name',
    features: [
      { id: 0, name: "f1", isSelected: false },
      { id: 1, name: "f2", isSelected: false }
    ],
    id: 0,
    isSelected: false
  }]);

  function sex() {
  setDataSet(DataSetArr.map(dataset => {
    console.log("Kek");
    dataset.isSelected = !dataset.isSelected;
      return dataset;
    }));
    console.log(DataSetArr[0].isSelected);
  }

  return (
    <div>
      <input type="checkbox" 
      onChange={() => sex()}/>
    </div>
  );
}

export default App;
