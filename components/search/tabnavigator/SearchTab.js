import React from "react";
import { StyleSheet, Text, View, Image,Keyboard, TouchableWithoutFeedback } from 'react-native';
// import { Button } from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Container, Content } from "native-base";
import SearchHeader from "../SearchHeader";
import SearchBody from "../SearchBody";
import Axios from "axios";
import Loading from "../../shared/Loading";

class SearchTab extends React.Component {
    state={
        searchBeer : '',
        searchData : {},
        imageSource :'',
        drinkFound : false,
        loading: false
    }

    beerSearch = ()=>{
        // alert('search for beer')
        this.setState({loading : true})
        const renameBeer = this.state.searchBeer.toLocaleLowerCase()
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${renameBeer}`)
        .then((val)=>{
            if (val.data.ingredients[0]) {
                const drinkName = `https://www.thecocktaildb.com/images/ingredients/${val.data.ingredients[0].strIngredient.toLocaleLowerCase()}.png` 
                this.setState({
                    searchData : val.data.ingredients[0],
                    drinkFound : true,
                    imageSource : drinkName,
                    loading : false
                })
            }
            console.log(this.state.searchData, 'ini hasilnya');
            
        }).catch((err)=>{
            console.log(err);
            this.setState({
                drinkFound : false,
                loading : false
            })

        })
        
    }

    renderContent = ()=>{
        if (this.state.drinkFound) {
                return <Content><SearchBody data={this.state.searchData} imageSource={this.state.imageSource}/></Content>
        }else{
            console.log('drik not found!');
            return <View style={{ flex: 1, justifyContent : 'center' }}><Text style={{textAlign : "center"}}>drink not found ! search your drink!</Text></View>
            
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
                    {this.state.loading?  <Loading /> : this.renderContent() }
            </Container>
        )
    }
}

export default SearchTab
