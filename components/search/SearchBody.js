import React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { Button } from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Content, ListItem, List } from "native-base";
class SearchBody extends React.Component {
    state={
        searchBeer : '',
        searchData : {},
        imageSource :'',
        drinkFound : false
    }

   
    render(){
        const drinkData = this.props.data
        return(
            <Content>
                <List style={{backgroundColor : 'white'}}>
                    <ListItem itemDivider style={{justifyContent : 'center'}}>
                        <Image source={{uri : this.props.imageSource}} style={{height: 200, width:200}}/>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Name</Text>
                    </ListItem>

                    <ListItem style={{flexDirection :"row", justifyContent : "space-between"}}>
                        <View>
                            <Text>{drinkData.strIngredient}</Text>
                        </View>
                        <Button title='+ Add favourite' />
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
