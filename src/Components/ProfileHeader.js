import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useSelector } from "react-redux";


export default function ProfileHeader() {

    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user.username}</Text>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="add-box" size={30} color="black" /> 
                <Ionicons name="ios-menu-sharp" size={30} color="black" />   
            </View>     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }

});