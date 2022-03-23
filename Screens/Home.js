import React,{Componet} from "react"
import { View,Text,FlatList,StyleSheet,Alert,SafeAreaView} from "react-native"
import { ListItem } from "react-native-elements"
import axios from "axios"

export default class HomeScreen extends Componet{
    constructor(props){
        super(props);
        this.state={
            listData:[],
            url:"http://localhost:5000"
        }
    }
getPlanets=()=>{
    const {url}=this.state;
    axios
    .get(url)
    .then(response=>{
        return this.setState({
            listData:response.data.data
        })
    })
    .catch(error=>{
        Alert.alert(error.message)
    })
}

renderItem=({item,index})=>(
<ListItem
key={index}
title={`planets:${item.name}`}
subtitle={`distance from earth:${item.distance_from_earth}`}
titleStyle={styles.title}
containerStyle={styles.listContainer}
bottomDivider
chevron
onPress={()=>
    this.props.navigation.navigate("details",{planet_name:item.name})

}

/>

)
keyExtractor=(item,index)=>index.toString()

    render(){
        const {listData=this.state}
        if(listData.length==={
            return(
                <View style={styles.emptycontainer}>
                <Text>loading</Text>
                </View>
            )
        })
        return(
            <View>
                <Text>
                    HomeScreen
                </Text>
                </View>
        )
    }
}