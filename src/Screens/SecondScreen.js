import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SecondScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View 
            style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    {'Second Screen'}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    buttonContainer:{
        backgroundColor:'grey',
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    buttonText:{
        color:'white',
        fontSize:22,
        fontWeight:'bold'
    }
})