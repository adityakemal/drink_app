import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Button } from "native-base";
class FavouriteTab extends React.Component {

    render(){
        return(
            <View style={styles.container}>
              
                <Text style={{color : 'white'}}>favourite Beers!</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'red'


    }
})

export default FavouriteTab
