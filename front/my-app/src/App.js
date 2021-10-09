import './App.css';
import React from 'react';
import SearchBarNative from './Search/Search-native';
import DataSetList from './DatasetList/DataSetList'
import { View, StyleSheet } from "react-native";

import Layout from "./components/Layout";
import {AppRouter} from "./components/AppRouter";
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './components/NavBar/NavBarElements';

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

  function selectDataset(id) {
  setDataSet(DataSetArr.map(dataset => {
      if (dataset.id === id) {
        dataset.isSelected = !dataset.isSelected; 
      }
      return dataset;
    }));
  }

  function selectFeatures(fName) {
    DataSetArr.map(ds => {
      ds.features.map(f => {
        if (f.name === fName) {
          f.isSelected = !f.isSelected;
          console.log(f.name);
        }
        return f;
      })
    })
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
      </div>
    </div>
  );
}

export default App;
