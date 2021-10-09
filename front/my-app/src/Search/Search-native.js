import '../App.css'
import * as React from 'react';
import { Searchbar } from '../../node_modules/react-native-paper';
import { View, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';

const SearchBarNative = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const styles = StyleSheet.create({
    searchbar:{
      textAlign:'center',
      paddingTop: 30,
      marginLeft: 800,
      //marginTop: 30,
      width: 500,
      justifyContent: 'space-between',
    },
  });

  return (
    <View className="searchbar">
      <Card>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Card> 
    </View>
  );
};

export default SearchBarNative;