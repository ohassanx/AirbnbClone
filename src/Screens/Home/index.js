import React from 'react';
import {View, ImageBackground,Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
const HomeScreen = (props) => {
    return(
        <View>
            <Pressable 
            style = {styles.searchButton}
            onPress = {() => console.warn('Explore Btn clicks')}
            >
            <Text style = {styles.buttonText}>Explore nearby places</Text>
            </Pressable>
            <Fontisto name="search" size={25} color={"#f15454"} />
            <ImageBackground source = {'../../../assets/images/wallpaper.jpg'} style = {styles.image}>
            </ImageBackground>

            <Text style = {styles.title}></Text>
            <Pressable 
            style = {styles.button}
            onPress = {() => console.warn('Explore Btn clicks')}
            >
            <Text style = {styles.buttonText}>Explore nearby places</Text>
            </Pressable>
   
        </View>
    );
};
export default HomeScreen;
