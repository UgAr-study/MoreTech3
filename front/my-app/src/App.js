import './App.css';
import React from 'react';
import SearchBarNative from './Search/Search-native';
import DataSetList from './DatasetList/DataSetList'
import { View, StyleSheet } from "react-native";

import Layout from "./components/Layout";
import {AppRouter} from "./components/AppRouter";
import Navbar from './components/NavBar/index';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './components/NavBar/NavBarElements';
import { BrowserRouter as Router } from 'react-router-dom';
import CheckBox from './CheckBox/CheckBox';

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
    },
    {
      description: 'desc3',
      name: 'name3',
      features: [
        { id: 0, name: "f3", isSelected: false },
        { id: 1, name: "f1", isSelected: false }
      ],
      id: 2,
      isSelected: true
    },
    {
      description: 'desc4',
      name: 'name4',
      features: [
        { id: 0, name: "f2", isSelected: false },
        { id: 1, name: "f1", isSelected: false }
      ],
      id: 3,
      isSelected: false
    },
    {
      description: 'desc5',
      name: 'name5',
      features: [
        { id: 0, name: "f1", isSelected: false },
        { id: 1, name: "f3", isSelected: false }
      ],
      id: 4,
      isSelected: false
    }
  ]);


  const [allDataSetArr, setAllDataSet] = React.useState([
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
    },
    {
      description: 'desc3',
      name: 'name3',
      features: [
        { id: 0, name: "f3", isSelected: false },
        { id: 1, name: "f1", isSelected: false }
      ],
      id: 2,
      isSelected: true
    },
    {
      description: 'desc4',
      name: 'name4',
      features: [
        { id: 0, name: "f2", isSelected: false },
        { id: 1, name: "f1", isSelected: false }
      ],
      id: 3,
      isSelected: false
    },
    {
      description: 'desc5',
      name: 'name5',
      features: [
        { id: 0, name: "f1", isSelected: false },
        { id: 1, name: "f3", isSelected: false }
      ],
      id: 4,
      isSelected: false
    }
  ]);

  function updateDataSetArr(list) {
    if (list.length === 0) {
      setDataSet(allDataSetArr);
      return
    }
    console.log("list");
    console.log(list);

    var newDataSetArr = []
    DataSetArr.map(dataset => {
      dataset.features.map(fds => {
        list.map(f => {
          if (fds.name === f.name) {
            newDataSetArr.push(dataset)
            return f;
          }
        })
        return fds;
      })
      return dataset;
    })
    console.log("New Ds");
    console.log(newDataSetArr);
    setDataSet(newDataSetArr);
  }

  function selectDataset(dataset_id) {
    setDataSet(DataSetArr.map(ds => {
      if (ds.id === dataset_id) {
        ds.isSelected = !ds.isSelected; 
      }
      return ds;
    }));
  }

  function selectFeatures(dataset_id, feature_id) {
    setDataSet(DataSetArr.map(ds => {
      if (ds.id === dataset_id) {
        ds.features.map(f => {
          if (f.id === feature_id) {
            f.isSelected = !f.isSelected;
          }
        })
      }
      return ds;
    }));
  }

  return (
    <div>
      {/* Header */}
      <div className="header">
          <img className="logo" src={"VTB.png"} height={"50%"}/>
          <Router>
            <Navbar />
          </Router>
          
          <div className="right-col">
            <div className="sign">
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
              <NavLink to='/sign-up' activeStyle>
                Sign Up
              </NavLink>
            </div>
            
            <SearchBarNative/>
          </div>
          
      </div>

      {/* Auth */}
      <Layout>
        <AppRouter/>
      </Layout>

      {/* Dataset array */}
      <div className="mainbody">
          <DataSetList dataSetArr={DataSetArr} 
          selectDatasetFunc={selectDataset} selectFeaturesFunc={selectFeatures}/>
          <CheckBox dataSetArr={allDataSetArr}  handleFilters={updateDataSetArr}/>
      </div>
    </div>
  );
}

export default App;
