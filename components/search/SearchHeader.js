import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Button } from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Header, Icon, Item, Input } from "native-base";
class SearchHeader extends React.Component {

    render(){
        return(
           <Header
           rounded
           style={{height : 80}}
           searchBar
           >
               <Item>
                   <Icon name='ios-search'/>
                   <Input
                    placeholder='Enter drink name!'
                    onChangeText ={this.props.funcOnChange}
                    returnKeyType='search'
                    onSubmitEditing={this.props.beerSearch}
                   />
                   
               </Item>

           </Header>
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

export default SearchHeader
