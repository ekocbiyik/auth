//import libraries
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View elevation={12} style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = StyleSheet.create(
    {
        viewStyle: {
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,
            shadowColor: '#FFFFFF',
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            position: 'relative',
            overflow: 'visible'
        },
        textStyle: {
            fontSize: 20
        },
    }
);

// make the component available
//export default Header;
export { Header };

