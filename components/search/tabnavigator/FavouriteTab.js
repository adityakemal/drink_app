import React from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
// import { Button } from "native-base";
class FavouriteTab extends React.Component {
    state ={
        dataFavourite : [],
    }
    componentDidMount (){
        this.retrieveData()
    }
    componentDidUpdate(prevProps) {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      // The screen is focused
      // Call any action
      console.log('====================================');
      console.log('AKU FOKUUUUUSSS!!');
      console.log('====================================');
      this.retrieveData() //ini call api
    });
    
      }
    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('favouriteDrink');
          if (value !== null) {
            // We have data!!
            var data = JSON.parse(value)
            console.log( 'HASIL DARI LOCAL STORAGEe');
            this.setState({
                dataFavourite : data
            })
          }
          
        } catch (error) {
            // Error retrieving data
            console.log('kosong');
        }
    };

    renderContent = ()=>{
        return this.state.dataFavourite.map(res=>{
            return(
            <Text key={res.key} style={{color : 'white'}}>{res.name}</Text>
            )
        })
            // return <Content><SearchBody data={this.state.searchData} imageSource={this.state.imageSource}/></Content>
    }


    render(){        
        return(
            <View style={styles.container}>
                {
                    this.renderContent()
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
