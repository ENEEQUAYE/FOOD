import React from 'react'
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import Icons from '@expo/vector-icons/Entypo'
import Product from '../components/Product'

export default class Home extends React.Component {
    state = {
        city: "Accra"
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    marginHorizontal: 20,
                    justifyContent: "space-between",
                }}>
                    <View style={{ width: "10%" }}>
                        <Image
                            source={require('../images/logo.jpg')}
                            style={{ width: 50, height: 50 }} // Adjust the size as necessary
                        />
                    </View>
                    <View style={{ width: "80%" }}>
                        <Picker
                            selectedValue={this.state.city}
                            style={{ height: 50, width: 160, marginLeft: 70 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ city: itemValue })
                            }>
                            <Picker.Item label="Accra" value="Accra" />
                            <Picker.Item label="Kumasi" value="Kumasi" />
                            <Picker.Item label="Takoradi" value="Takoradi" />
                            <Picker.Item label="Tamale" value="Tamale" />
                            <Picker.Item label="Cape Coast" value="Cape Coast" />
                            <Picker.Item label="Koforidua" value="Koforidua" />
                            <Picker.Item label="Ho" value="Ho" />
                            <Picker.Item label="Sunyani" value="Sunyani" />
                            <Picker.Item label="Wa" value="Wa" />
                            <Picker.Item label="Techiman" value="Techiman" />
                            <Picker.Item label="Bolgatanga" value="Bolgatanga" />
                        </Picker>
                    </View>
                    <View>
                        <Icons name="magnifying-glass" size={30} />
                    </View>
                </View>
                <View style={{
                    paddingHorizontal:20,
                    marginTop: 20
                }}>
                    <Text style={{fontSize:30, fontWeight: "bold"}}>Food that</Text>
                    <Text style={{fontSize:30, fontWeight: "bold"}}>meets your needs</Text>
                </View>


                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 40 }}>
                    
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../images/logo.jpg')}
                            style={{ width: 55, height: 60 }}
                        />
                        <Text style={{
                            paddingLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Burgers</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../images/logo.jpg')}
                            style={{ width: 55, height: 60 }}
                        />
                        <Text style={{
                            paddingLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Burgers</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../images/logo.jpg')}
                            style={{ width: 55, height: 60 }}
                        />
                        <Text style={{
                            paddingLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Burgers</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../images/logo.jpg')}
                            style={{ width: 55, height: 60 }}
                        />
                        <Text style={{
                            paddingLeft: 10,
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Burgers</Text>
                    </View>
            </ScrollView>
                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 40,
                    marginHorizontal: 20,
                }}>
                    <View style={{width: "50%"}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: "bold",
                        }}>New Products</Text>
                    </View>
                    <View style={{width: "50%", alignItems: "flex-end"}}>
                        <Icons name="dots-three-horizontal" size={25} color= "#848385" />
                        </View>
                </View>
                
                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 15,
                    marginTop: 30,
                }}>
                    <Product
                    image={require("../images/logo.jpg")}
                        title="Smokehouse"
                        price="12.99"
                        onPress={() => this.props.navigation.navigate('Detail')}
                    />
                    <Product
                    image={require("../images/logo.jpg")}
                    title="Honey Chilli"
                    price="10.99"
                    marginTop={25}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 15,
                    marginTop: 30,
                }}>
                    <Product
                    image={require("../images/logo.jpg")}
                        title="Smokehouse"
                        price="12.99"
                    />
                    <Product
                    image={require("../images/logo.jpg")}
                    title="Honey Chilli"
                    price="10.99"
                    marginTop={25}
                    />
                </View>
            </ScrollView>
        )
    }
}
