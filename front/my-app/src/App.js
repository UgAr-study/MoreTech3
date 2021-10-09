import './App.css';
import React from 'react';
import SearchBarNative from './Search/Search-native';
import DataSetList from './DatasetList/DataSetList'

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
      <SearchBarNative/>
      <DataSetList dataSetArr={DataSetArr} selectDatasetFunc={selectDataset} selectFeaturesFunc={selectFeatures}/>
      <input type="checkbox"  
      onChange={() => {
        return (
          <div></div>
        );
      }}/>
    </div>
  );
}

export default App;
