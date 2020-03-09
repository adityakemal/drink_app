import React from "react";
import { StyleSheet, Text, View, Button, Image,AsyncStorage } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Content, ListItem, List } from "native-base";
import Loading from '../shared/Loading'
class SearchBody extends React.Component {
    state={
        searchBeer : '',
        searchData : {},
        imageSource :'',
        drinkFound : false,
        favouriteDatas: [],
        isFav : false
    } 
    componentDidMount (){
        this.retrieveData()
    }

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('favouriteDrink');
            if (value !== null) {
                // We have data!!
                const parseData = JSON.parse(value)
                    this.setState({
                        favouriteDatas : parseData,
                        isFav : parseData.some(res => res.name === this.props.data.strIngredient)
                    })
                console.log(value, 'HASIL DARI LOCAL STORAGE');
                console.log(this.state.favouriteDatas, 'STATE DATA ADA');
            }
        } catch (error) {
            // Error retrieving data
            console.log(this.state.favouriteDatas, 'STATE DATA KOSOG');
        }
    };  
    
    simpanFavData = async () => {
        if (this.state.favouriteDatas.length < 0) {
            var favData = [{key : this.props.data.idIngredient , name : this.props.data.strIngredient}]
        }else{
            var favData = [...this.state.favouriteDatas,{key : this.props.data.idIngredient , name : this.props.data.strIngredient}]
        }
        var favDataString = JSON.stringify(favData)  
        try {
            await AsyncStorage.setItem('favouriteDrink', favDataString);
            console.log('suksess simpan locl strg');
            this.setState({isFav : true})
            } catch (error) {
            // Error saving data
            console.log('GALAT locl strg');
            }  
    };

    render(){        
        const drinkData = this.props.data
        return(
            <Content>
                {/* <Loading/> */}
                <List style={{backgroundColor : 'white'}}>
                    <ListItem itemDinvider style={{justifyContent : 'center'}}>
                        <Image source={{uri : this.props.imageSource}} style={{height: 200, width:200}}/>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Name</Text>
                    </ListItem>

                    <ListItem style={{flexDirection :"row", justifyContent : "space-between"}}>
                        <View>
                            <Text>{drinkData.strIngredient}</Text>
                        </View>
                        <Button title='+ Add favourite' disabled={this.state.isFav} onPress={this.simpanFavData} />
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Type</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{drinkData.strType}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Alcohol</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{drinkData.strAlcohol? drinkData.strAlcohol : 'Non Alcohol'}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Alcohol By Volume (ABV)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{drinkData.strABV? drinkData.strABV +' %' : '-' } </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Description</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{drinkData.strDescription? drinkData.strDescription : '-'}</Text>
                    </ListItem>
                </List>
            </Content>
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

export default SearchBody
