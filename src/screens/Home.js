import React from 'react'
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import Icons from '@expo/vector-icons/Entypo'

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
                            style={{ height: 50, width: 160 }}
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
            </ScrollView>
        )
    }
}
