import React from 'react'
import { View,Image,TouchableOpacity, Text} from 'react-native'

export default class Product extends React.Component{
    render(){
        return(
            <TouchableOpacity
            onPress={this.props.onPress}
            style={{
                height: 280,
                width: 160,
                borderRadius: 20,
                marginTop: this.props.marginTop,
                backgroundColor: "#f5f5fa",
                marginRight: 10,
            }}
            >
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                alignSelf: "center"
              }}>
                <Image
                  source={require('../images/logo.jpg')}
                  style={{ width: 25, height: 20 }} />
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingHorizontal: 10,
                }}>290 Calories</Text>
                </View>
                <Image
                source={this.props.image}
                style={{
                    width: 130,
                    height: 105,
                    alignSelf: "center",
                    marginTop: 15,
                    marginBottom: 15,
                }}/>  
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 10,
                }}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}