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

import {useIsAuth} from "./context/AuthContextProvider";

function App() {

  let DataSetArrayBase = [
    {
      description: 'aaa',
      name: 'name1',
      features: [
        { id: 0, name: "f1", isSelected: false },
      ],
      id: 0,
      isSelected: false,
      isVisible: { bySearch: true, byFilters: true },
    },
    {
      description: 'bbb',
      name: 'name2',
      features: [
        { id: 0, name: "f3", isSelected: false },
        { id: 1, name: "f2", isSelected: false }
      ],
      id: 1,
      isSelected: false,
      isVisible: { bySearch: true, byFilters: true },
    },
    {
      description: 'desc3',
      name: 'name3',
      features: [
        { id: 0, name: "f3", isSelected: false },
      ],
      id: 2,
      isSelected: true,
      isVisible: { bySearch: true, byFilters: true },
    },
    {
      description: 'desc4',
      name: 'name4',
      features: [
        { id: 0, name: "f2", isSelected: false },
        { id: 1, name: "f1", isSelected: false }
      ],
      id: 3,
      isSelected: false,
      isVisible: { bySearch: true, byFilters: true },
    },
    {
      description: 'desc5',
      name: 'name5',
      features: [
        { id: 1, name: "f3", isSelected: false }
      ],
      id: 4,
      isSelected: false,
      isVisible: { bySearch: true, byFilters: true },
    }
  ];

  //const [allDataSetArr, setAllDataSet] = React.useState(DataSetArrayBase);
  const [DataSetArr, setDataSet] = React.useState(DataSetArrayBase);

  function updateDataSetArrBySearch(searchQuery) {
    let ans = [];
    if (searchQuery.length == 0) {
      DataSetArr.map(ds => {
        ds.isVisible.bySearch = true;
        ans.push(ds);
      });
 
      setDataSet(ans);
      return;
    }

    DataSetArr.map(ds => {
      if (ds.description.slice(0, searchQuery.length) == searchQuery) {
        ds.isVisible.bySearch = true;
      }
      else {
        ds.isVisible.bySearch = false;
        console.log("dis by search" + ds.id);
      }
      ans.push(ds);
    });

    setDataSet(ans);
  }

  function updateDataSetArrByFilters(appliedFeatures) {
    let ans = []
    if (appliedFeatures.length == 0) {
      DataSetArr.map(ds => {
        ds.isVisible.byFilters = true;
        ans.push(ds);
      });
 
      setDataSet(ans);
      return;
    }

    DataSetArr.map(ds => {
      let foundMatch = false;
      ds.features.map(f => {
        appliedFeatures.map(af => {
          if (f.name == af.name) {
            foundMatch = true;
          }
          return af;
        })
        return f;
      })
      if (foundMatch) {
        ds.isVisible.byFilters = true;
      }
      else {
        ds.isVisible.byFilters = false;
      }
      ans.push(ds);
      return ds;
    })

    setDataSet(ans);
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

  // For auth
  const {isAuth, setIsAuth}=useIsAuth()

  return (
    <div>
      {/* Header */}
      <div className="header">
          <img className="logo" src={"VTB.png"} height={"50%"}/>
          
          <Router>
            <Navbar />
          </Router>
          
          <div className="right-col">
            {
            isAuth ?
            <div className="sign">
              <NavBtn>
                <NavBtnLink onClick={()=>setIsAuth(false)} to='/'>Log out</NavBtnLink>
              </NavBtn>
            </div>
            :
            <div className="sign">
              <NavBtn>
                <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
              </NavBtn>
              <NavLink to='/sign-up' activeStyle>
                Sign Up
              </NavLink>
            </div>
            }
            <SearchBarNative updateDatasets={updateDataSetArrBySearch}/>
          </div>
      </div>

      {/* IDK where */}
      {/* <Route path={route.path}
        exact={route.exact}
        component={route.component}
        key={route.path}
      /> */}

      {/* Dataset array */}
      <div className="mainbody">
          <DataSetList dataSetArr={DataSetArr} 
          selectDatasetFunc={selectDataset} selectFeaturesFunc={selectFeatures}/>

          <CheckBox dataSetArr={DataSetArr} handleFilters={updateDataSetArrByFilters}/>
      </div>
    </div>
  );
}

export default App;
