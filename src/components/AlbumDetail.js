import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class AlbumDetail extends Component {
    render() {
        console.log(this.props);
        
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }, 
    
  });

export default AlbumDetail;
