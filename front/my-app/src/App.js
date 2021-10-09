import './App.css';
import React from 'react';
import SearchBarNative from './Search/Search-native';
import DataSetList from './DatasetList/DataSetList'

import {Login} from "./pages/Login"
import Layout from "./components/Layout";
import {AppRouter} from "./components/AppRouter";

function App() {

  const [DataSetArr, setDataSet] = React.useState([
    {
      description: 'desc1',
      name: 'name1',
      features: [
        { id: 0, name: "f1", isSelected: false },
        { id: 1, name: "f2", isSelected: false }
      ],
      id: 0,
      isSelected: false
    },
    {
      description: 'desc2',
      name: 'name2',
      features: [
        { id: 0, name: "f3", isSelected: false },
        { id: 1, name: "f2", isSelected: false }
      ],
      id: 1,
      isSelected: false
    }
  ]);

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
      {/* Part for Ignat */}
      {/* <Layout>
        <AppRouter/>
      </Layout> */}

      <DataSetList dataSetArr={DataSetArr} selectDatasetFunc={selectDataset} selectFeaturesFunc={selectFeatures}/>
    </div>
  );
}

export default App;
