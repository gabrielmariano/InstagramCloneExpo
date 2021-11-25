import React from 'react';
import { View, Text, StyleSheet, ToutchableOpacity, TouchableOpacity } from "react-native";

export default function ButtonComponent(props) {
    return (
       <TouchableOpacity style={styles.button}>
           <Text style={styles.text} >{props.buttonName}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});