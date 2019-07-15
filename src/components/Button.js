import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const Button = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.buttonStyle}>Buy</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default Button;