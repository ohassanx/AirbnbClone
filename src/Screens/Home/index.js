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
            <Text style = {styles.searchButtonText}>Explore nearby places</Text>
            </Pressable>

           <Fontisto name="search" size={25} color={'#f15454'} />
           <Text style = {styles.searchButtonText}>Where are you going?</Text>            <ImageBackground 
            source = {'../../../assets/images/wallpaper.jpg'} 
            style = {styles.image}>
            <Text style = {styles.title}>Go Near</Text>
           

            <Text style = {styles.title}></Text>
            
            <Pressable 
            style = {styles.button}
            onPress = {() => console.warn('Explore Btn clicks')}
            >
            <Text style = {styles.buttonText}>Explore nearby places</Text>
            </Pressable>
            </ImageBackground>
        </View>
    );
};
export default HomeScreen;
