import { ImageListItem } from '@material-ui/core';
import React from 'react';
import { View, Image, Text , StyleSheet, TouchableOpacity, Flatlist, FlatList } from "react-native";
import { FakeImagesData } from "../FakePicturesData";


export default function StoryComponent(props) {
    
    const Story = (props) => {
        return(
            <TouchableOpacity style={{width: 60, height: 76, marginLeft: 15, marginVertical: 15}}>
            <View style={{width: 60, height:60, borderWidth: 1, borderColor: '#00000050', borderRadius: 50}}></View>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>
                <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={FakeImagesData}
                renderItem={({item}) => <Story image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 52,
        height: 52,
        borderRadius: 26,
        position: 'absolute',
        top: -56,
        left: 4, 

    },
    text: {
        fontSize: 15,
        
        textAlign: 'center'
    }
})