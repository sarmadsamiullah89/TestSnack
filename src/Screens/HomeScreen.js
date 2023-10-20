import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('SecondScreen')}
            style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    {'Next Screen'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
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
        fontSize:16,
        fontWeight:'bold'
    }
})