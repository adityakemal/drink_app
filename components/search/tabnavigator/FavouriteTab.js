import React from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
// import { Button } from "native-base";
class FavouriteTab extends React.Component {
    state ={
        dataFavourite : []
    }
    componentDidMount (){
        this.retrieveData()
    }



    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('favouriteDrink');
          if (value !== null) {
            // We have data!!
            var data = JSON.parse(value)
            console.log(value, 'HASIL DARI LOCAL STORAGEe');
            this.setState({
                dataFavourite : data
            })
          }
          
        } catch (error) {
            // Error retrieving data
            console.log('kosong');
        }
    };

    render(){        
        return(
            <View style={styles.container}>
                {
                    this.state.dataFavourite.map(res=>{
                        return(
                        <Text style={{color : 'white'}}>{res.name}</Text>
                        )
                    })
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'maroon'


    }
})

export default FavouriteTab
