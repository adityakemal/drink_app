import React from "react";
import { StyleSheet, Text, View, Image, AsyncStorage, Button } from 'react-native';
class FavouriteTab extends React.Component {
    state ={
        dataFavourite : [],
    }
    componentDidMount (){
        this.retrieveData()
        this._unsubscribe = this.props.navigation.addListener('didFocus', () => {
            // do something
            this.retrieveData()
            console.log('MOUNT')
        });
    }

    // componentWillUnmount() {
    //     this._unsubscribe();
    //     console.log('unmount')
      
    //   }
   
    
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

    removeData =  () => {
         
          this.setState({dataFavourite : []},()=> AsyncStorage.removeItem('favouriteDrink'))
          console.log( 'sukse hapus LOCAL STORAGEe');
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
                <Button title='remove all' onPress={this.removeData}/>

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
