import React from "react";
import { Text, ScrollView, View } from "react-native";
import UserPictureAndFollows from "../Components/UserPicturesAndFollows";
import { useSelector } from "react-redux";
import UserInfo from "../Components/UserInfo"
import ButtonComponent from "../Components/ButtonComponent";
import StoryComponent from "../Components/StoryComponent";
import UserPostProfile from "../Components/UserPostProfile";

export default function ProfileScreen() {

    const user = useSelector(state => state.user);

    return (
        <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
            <UserPictureAndFollows user= {user}/>
            <UserInfo user= {user} />
            <ButtonComponent buttonName={'Edit Profile'}/>
            <StoryComponent />
            <UserPostProfile />
        </ScrollView>
    )
}