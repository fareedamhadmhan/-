import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// import TabBar from 'react-native-tab-bar-footer'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class dashboardScreen extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, backgroundColor: '#66B2FF' }}>
                <View style={{ flex: 0.1, marginTop: 10, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#66B2FF' }}>
                    <Button
                        containerStyle={{ margin: 5, width: 120, height: 70 }}
                        icon={
                            <Icon
                                name="plus"
                                size={25}
                                color="green"
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }
                        title='เพิ่มผู้ใช้' //iconRight
                    />
                    <Button
                        containerStyle={{ margin: 5, width: 120, height: 70 }}
                        icon={
                            <Icon
                                name="minus"
                                size={25}
                                color="red"
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }
                        title='ลดผู้ใช้' //iconRight
                    />
                    <Button
                        containerStyle={{ margin: 5, width: 120, height: 70 }}
                        icon={
                            <Icon
                                name="pencil"
                                size={25}
                                color="#CCCC00"
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }
                        title='แก้ไขข้อมูล' //iconRight
                    />
                </View>
                <ScrollView style={{ flex: 0.9, backgroundColor: '#66B2FF', marginLeft: 5, marginRight: 5 }} >
                    <TouchableOpacity onPress={() => navigate('User_infoScreen')}>
                        <View style={style.item}>
                            <Image
                                source={require('../../src/img/boy.png')}
                                style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20 }}
                            />
                            <View style={{ marginLeft: 30, marginRight: 20 }}>
                                <Text style={style.text_info}>
                                    ชื่อ : XXXXX XXXXX
                            </Text>
                                <Text style={style.text_info}>
                                    อายุ : 30
                            </Text>
                                <Text style={style.text_info}>
                                    สถานที่ : ตึกICU เตียง4
                            </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('User_infoScreen')}>
                        <View style={style.item}>
                            <Image
                                source={require('../../src/img/smile.png')}
                                style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20 }}
                            />
                            <View style={{ marginLeft: 30, marginRight: 20 }}>
                                <Text style={style.text_info}>
                                    ชื่อ : XXXXX XXXXX
                            </Text>
                                <Text style={style.text_info}>
                                    อายุ : 25
                            </Text>
                                <Text style={style.text_info}>
                                    สถานที่ : ตึกICU เตียง8
                            </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('User_infoScreen')}>
                        <View style={style.item}>
                            <Image
                                source={require('../../src/img/person.png')}
                                style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20 }}
                            />
                            <View style={{ marginLeft: 30, marginRight: 20 }}>
                                <Text style={style.text_info}>
                                    ชื่อ : XXXXX XXXXX
                            </Text>
                                <Text style={style.text_info}>
                                    อายุ : 27
                            </Text>
                                <Text style={style.text_info}>
                                    สถานที่ : ตึกICU เตียง9
                            </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('User_infoScreen')}>
                        <View style={style.item}>
                            <Image
                                source={require('../../src/img/happy.png')}
                                style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20 }}
                            />
                            <View style={{ marginLeft: 30, marginRight: 20 }}>
                                <Text style={style.text_info}>
                                    ชื่อ : XXXXX XXXXX
                            </Text>
                                <Text style={style.text_info}>
                                    อายุ : 15
                            </Text>
                                <Text style={style.text_info}>
                                    สถานที่ : ตึกICU เตียง7
                            </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#66B2FF'
    }, item: {
        flexDirection: 'row',
        alignContent: 'stretch',
        backgroundColor: '#0066cc',
        marginTop: 10
    }, ecg_graph: {
        width: 384.2,
        height: 170,
        marginTop: 50
    }, text_info: {
        marginTop: 20,
        fontSize: 16,
        color: '#ffffff'
    }, control: {
        flexDirection: 'row',
        alignItems: 'center'
    }, btn: {

    }
})