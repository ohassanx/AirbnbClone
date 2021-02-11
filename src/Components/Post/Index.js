import React from 'react';
import {View, Image,Text, Pressable} from 'react-native';
// import styles from './styles';
// import Fontisto from 'react-native-vector-icons/Fontisto'
const Post = (props) => {
    return(
        <View styles = {styles.container}>
            {/* Image */}
            <Image 
            source = {props.}
            style = {styles.image}
            />
            {/* Bed & Bedroom */}
            <Text style = {styles.bedrooms}>1 bed 1 bedroom</Text>
            {/* Type & Description */}
            <Text style = {styles.description}>Description</Text>
            {/* Old price & new price */}
            <Text style = {styles.prices}>
                <Text style = {styles.oldPrice}>£35</Text>
                <Text style = {styles.newPrice}>£30</Text>
            </Text>

            <Text style = {styles.totalPrice}>£310</Text>
        </View>
    );
};
export default Post;