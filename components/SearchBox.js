import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const SearchBox = ({placeholderTxt}) => {
  return (
      <View style={styles.container}>
          <Icon name="search"
          style={styles.icon}/>
          <TextInput
            placeholder={placeholderTxt}
          />

      </View>
  )
}

SearchBox.defaultProps = {
    placeholderTxt: "Search",
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48, 
        width: 343,
        alignSelf: 'center',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        borderWidth: 1,
        borderRadius: 100/16,
    },
    icon:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },
})

export default SearchBox