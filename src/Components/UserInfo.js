import { StylesContext } from "@material-ui/styles";
import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"


export default function UserPictureAndFollows(props) {

    const { user } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>{user.username}</Text>
            <Text style={{}}>{user.about}</Text>
            <Text style={{paddingTop: 5, marginBotton: 10}}>
                Seguido(a) por
                <Text style={styles.textBold}> {user.followedBy[0]} </Text>
                 e  
                <Text style= {styles.textBold}> {user.followedBy[1]} </Text>
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 5,

    },
    container: {
        justifyContent: "flex-start",
        paddingHorizontal: 15,
    },
    followersContainer: {
        alignContent: "center",
        justifyContent: "center",
    },
    textBold: {
        fontWeight: "bold",
        paddingVertical: 5,
    },
})