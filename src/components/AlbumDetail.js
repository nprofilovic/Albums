import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Card from './Card'
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        console.log(this.props);
        
        return (
            <Card>
                <CardSection>
                    <Text> {this.props.data.title} </Text>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }, 
    
  });

export default AlbumDetail;
