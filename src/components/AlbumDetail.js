import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        const {title, artist,image, thumbnail_image} = this.props.data
        return (
            <Card>
                <CardSection>
                    <View style={styles.tumbnailContainer}>
                        <Image style={styles.tumbnailStyle} source={{uri: thumbnail_image}} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View> 
                </CardSection>
                <CardSection>
                    <Image style={styles.imageStyle} source={{uri: image}} />
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }, 
    textContainer: {
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    tumbnailStyle: {
        width: 50,
        height: 50,
    },
    tumbnailContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight: 10,
    }, 
    titleStyle: {
        fontSize:19,
    }, 
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
    
  });

export default AlbumDetail;
