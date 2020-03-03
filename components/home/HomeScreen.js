import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "native-base";
const backgroundBeer = require('../../assets/beerme.jpg')
class HomeScreen extends React.Component {

    render(){
        const {navigation} = this.props
        return(
            <View style={styles.container}>
                <View style={{ position : 'absolute', height : '100%', width : '100%', top : 0, left : 0}}>
                    <Image source={backgroundBeer} style={{flex : 1, height : null, width : null}}/>
                </View>
                <Button
                onPress={()=>navigation.navigate('SearchTabNavigator')}
                block={true}
                >
                <Text style={{color : 'white'}}>Search Beers!</Text>

                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "flex-end",

    }
})

export default HomeScreen
