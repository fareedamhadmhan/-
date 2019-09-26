import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class loginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Username: '',
            Password: ''
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.container}>
                <Image
                    source={require('../../src/img/heartbeat.png')}
                    style={style.img}
                />

                <Text style={{ color: 'white', borderColor: '#000000', fontSize: 30, marginBottom: 20 }}>
                  ECG Monitoring System in ICU patients
                </Text>
               
                <Text style={{ color: 'white', borderColor: '#000000', fontSize: 30, marginBottom: 20 }}>
                 ระบบติดตามสัญญาณชีพผู้ป่วยหนัก
                </Text>
            
                <TextInput
                    style={style.inputUser}
                    placeholder="Username"
                    keyboardType="default"
                    onChangeText={(Username) => this.setState({ Username })}>
                </TextInput>

                <TextInput
                    style={style.inputPass}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(Password) => this.setState({ Password })}>
                </TextInput>

                <Button
                    containerStyle={{ margin: 5, width: 200 }}
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                            style={{
                                marginRight: 10
                            }}
                        />
                    }
                    title='เข้าสู่ระบบ' //iconRight
                    onPress={() => {
                        if(this.authenticate(this.state.Username, this.state.Password)){
                            navigate('menuDrawer')
                        }
                    }}
                />

                <Button
                    icon={
                        <Icon
                            name="book"
                            size={15}
                            color="white"
                            style={{
                                marginRight: 10
                            }}
                        />
                    }
                    containerStyle={{ width: 200 }}
                    title='คู่มือการใช้งาน'
                    onPress={() => navigate('manualScreen')}
                />
            </View >
        )
    }


    authenticate(user, pass) {
        if (user == '' && pass == '') {
            Alert.alert('Login success')
            return true
        } else {
            Alert.alert('Login fail')
            return false
        }
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#66B2FF',
        justifyContent: 'center',
        alignItems: 'center'
    }, img: {
        height: 150,
        width: 150,
        marginTop: 20,
        marginBottom: 10
    }, inputUser: {
        fontSize: 20, width: 250, marginTop: 20, marginBottom: 5, textAlign: 'center', backgroundColor: '#3399FF'
    }, inputPass: {
        fontSize: 20, width: 250, marginBottom: 15, textAlign: 'center', backgroundColor: '#3399FF'
    }
})

