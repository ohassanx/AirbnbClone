import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode : 'cover',
        alignItems: 'center',
    },
    bedrooms: {
        marginVertical:10,
        color: '#5b5b5b',
    },
    description: {
    fontSize: 18,
    lineHeight: 26,
    },
    prices: {
    fontSize: 18,
    marginVertical: 10,
    },
    oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    },
    newPrice: {
    fontWeight: 'bold',
    },
    totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    }
});
export default styles;