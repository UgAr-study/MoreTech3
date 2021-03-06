import '../App.css'
import * as React from 'react';
import { Searchbar } from '../../node_modules/react-native-paper';
import { View, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';

function SearchBarNative({updateDatasets}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => { 
    setSearchQuery(query);
    updateDatasets(query); 
  }

  return (
    <div className="searchbar">
      <View >
        <Card>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Card> 
      </View>
    </div>
  );
};

export default SearchBarNative;