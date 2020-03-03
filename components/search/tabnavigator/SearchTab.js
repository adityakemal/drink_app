import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Button } from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Container, Content } from "native-base";
import SearchHeader from "../SearchHeader";
import SearchBody from "../SearchBody";
import Axios from "axios";
class SearchTab extends React.Component {
    state={
        searchBeer : '',
        searchData : {},
        imageSource :'',
        drinkFound : false
    }

    beerSearch = ()=>{
        // alert('search for beer')
        const renameBeer = this.state.searchBeer.toLocaleLowerCase()
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${renameBeer}`)
        .then((val)=>{
            if (val.data.ingredients[0]) {
                const drinkName = `https://www.thecocktaildb.com/images/ingredients/${val.data.ingredients[0].strIngredient.toLocaleLowerCase()}.png` 
                this.setState({
                    searchData : val.data.ingredients[0],
                    drinkFound : true,
                    imageSource : drinkName
                })
            }
            console.log(this.state.searchData, 'ini hasilnya');
            
        }).catch((err)=>{
            console.log(err);
            this.setState({
                drinkFound : false,
            })

        })
        
    }

    renderContent = ()=>{
        if (this.state.drinkFound) {
            return <SearchBody data={this.state.searchData} imageSource={this.state.imageSource}/>
        }else{
            console.log('drink not found')
        } 
    }

    render(){
        return(
            <Container>
                <SearchHeader
                value={this.state.searchBeer}
                funcOnChange ={(val)=>this.setState({searchBeer : val})}
                beerSearch = {this.beerSearch}
                />
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
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

export default SearchTab
