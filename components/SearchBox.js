import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const SearchBox = ({placeholderTxt}) => {
  return (
      <View style={styles.container}>
          <Icon name="search"/>
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
        paddingTop: 200,
        alignSelf: 'center',
        fontSize: 20,
    },
})

export default SearchBox