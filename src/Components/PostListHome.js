import React, {useState} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Button } from "react-native";
import { FakeImagesData } from '../FakePicturesData'
import { FakePostData } from '../FakePostData'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
// import AlignItemsList from './AlignItemsList'



export default function PostListHome(props) {


    function LikeButton() {
        const [isLiked, setIsLiked] = useState(true);
    
        function clickHandler() {
          setIsLiked(!isLiked);
        }
    
        const like = {
            color: "#ff0000"
        };
        const desLike = {
            color: "#000"
        }
        return(
            <View>
                {isLiked?
                    <AntDesign name="hearto" onPress={clickHandler} size={24} color="black" style={isLiked ? like : null, {marginLeft: 10}}/>
                    :
                    <AntDesign name="heart" onPress={clickHandler} size={24} color="red" style={isLiked ? desLike : null,{marginLeft: 10}}/>
                }
            </View>
        )
    }

    const Story = (props) => {
        return(
            <View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                        <Image ratio={props.aspectRatio} source={{ url: props.image}} style={{ width: 32, height: 32, borderRadius: 16, marginRight: 10}}/>
                        <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{props.username}</Text>                    
                    </View>
                    <Feather name="more-horizontal" size={24} color="black"/>                    
                </View>
                <View>
                    
                </View>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                    
                    
                </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LikeButton />
                    <Feather name="message-circle" size={24} color="black"  style={{marginLeft: 10}}/>
                    <Feather name="send" size={24} color="black" style={{marginLeft: 10}} />
                </View>
                
                <View>
                
                
                    <Fontisto name="favorite" size={28} color="black" style={{marginRight: 10}}/>
                </View>    
            </View>
                <Text style={{marginLeft: 10, marginBottom: 15}}>{props.title}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList
                data={FakePostData}
                renderItem={({item}) => <Story image={item.image} title={item.title} likes= {item.likes} username= {item.user.first_name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={true}
                
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LikeButton />
                    {/* <AlignItemsList/> */}
                    <Feather name="message-circle" size={24} color="black"  style={{marginLeft: 10}}/>
                    <Feather name="send" size={24} color="black" style={{marginLeft: 10}} />
                </View>
                
                
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 400,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
    }
})