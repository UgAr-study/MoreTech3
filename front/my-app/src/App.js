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

  // const [selectedFeatures, setSelectedFeatures] = React.useState([{ id: 0, name: "f1", isSelected: false, 
  //                                                                 idDataset: [0] }, 
  //                                                                 { id: 1, name: "f2", isSelected: false, 
  //                                                                 idDataset: [1]}]); 

  function selectDataset(id) {
  setDataSet(DataSetArr.map(dataset => {
      if (dataset.id === id) {
        console.log("Dataset with Id:" + id + "selected");
        dataset.isSelected = !dataset.isSelected; 
      }
      return dataset;
    }));
  }

  function selectFeatures(fName) {
    DataSetArr.map(ds => {
      ds.features.map(f => {
        if (f.name == fName) {
          f.isSelected = !f.isSelected;
        } 
      })
    })
  }

  return (
    <div>
      <input type="checkbox" 
      onChange={() => sex()}/>
    </div>
  );
}

export default App;
