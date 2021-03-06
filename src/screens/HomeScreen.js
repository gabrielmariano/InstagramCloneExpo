import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlices"
import StoryComponent from  "../Components/StoryComponent";
import PostListHome from "../Components/PostListHome";

export default function HomeScreen() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const user = await axios.get('https://randomuser.me/api/');
        const newUser = {
            username: user.data.results[0].login.username,
            profilePicture: user.data.results[0].picture.large,
        }
        console.log(newUser)
        dispatch(setUser(newUser));
       // console.log(user.data.results[0].login.username)
    }

    return (
        <View style={{backgroundColor:'#fff', flex: 1 }}>
           <StoryComponent />
           <PostListHome />
        </View>
    );
}