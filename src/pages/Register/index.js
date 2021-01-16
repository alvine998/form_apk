import { Button, Content, Form, Icon, Input, Item, Label, Picker } from 'native-base';
import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize';


export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            selected: 'key1',
            selected2: 'key0',
            selected3: 'key0'
        }
    }

    onValueChange(value: String){
        this.setState({
            selected: value,
            selected2: value,
            selected3: value
        });
    }

    render(){
        return(
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{fontSize:normalize(30)}}>REGISTRASI</Text>
                        <Text style={{fontSize:normalize(24)}}>ANGGOTA</Text>
                        <Text style={{fontSize:normalize(24)}}>FORM</Text>

                        <Content style={{marginTop:normalize(20)}}>
                            <Form>
                                <Item floatingLabel style={{width:normalize(250)}}>
                                    <Icon type={'FontAwesome5'} name="user" />
                                    <Label>Nama Lengkap</Label>
                                    <Input/>
                                </Item>

                                <Item floatingLabel style={{width:normalize(250)}}>
                                    <Icon type={'FontAwesome5'} name="id-card" />
                                    <Label>  NIM</Label>
                                    <Input/>
                                </Item>

                                <View style={{marginTop:normalize(20), marginLeft:normalize(10)}}>
                                    <Label>Jenis Kelamin:</Label>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{width:normalize(250), borderWidth:1, marginTop:normalize(10), borderColor:'black'}}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                        
                                    >
                                        <Picker.Item label="Laki-laki" value="key1"/>
                                        <Picker.Item label="Perempuan" value="key2"/>
                                    </Picker>
                                </View>

                                <View style={{marginTop:normalize(20), marginLeft:normalize(10)}}>
                                    <Label>Divisi Bagian:</Label>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{width:normalize(250), borderWidth:1, marginTop:normalize(10), borderColor:'black'}}
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange.bind(this)}
                                        
                                    >
                        
                                        <Picker.Item label="Ketua" value="key0"/>
                                        <Picker.Item label="Wakil Ketua" value="key1"/>
                                        <Picker.Item label="Sekretaris" value="key2"/>
                                        <Picker.Item label="Bendahara" value="key3"/>
                                        <Picker.Item label="Keolahragaan" value="key4"/>
                                        <Picker.Item label="PSDM" value="key5"/>
                                        <Picker.Item label="Humas" value="key6"/>
                                        <Picker.Item label="Kesekretariatan" value="key7"/>
                                        <Picker.Item label="Sponsorship" value="key8"/>
                                    </Picker>
                                </View>

                                <View style={{marginTop:normalize(20), marginLeft:normalize(10)}}>
                                    <Label>Status:</Label>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{width:normalize(250), borderWidth:1, marginTop:normalize(10), borderColor:'black'}}
                                        selectedValue={this.state.selected3}
                                        onValueChange={this.onValueChange.bind(this)}
                                        
                                    >
                                        
                                        <Picker.Item label="Anggota Muda" value="key0"/>
                                        <Picker.Item label="Anggota Form" value="key1"/>
                                        <Picker.Item label="BPH" value="key2"/>
                                        <Picker.Item label="Demis" value="key3"/>
                                        <Picker.Item label="DPP" value="key4"/>
                                        <Picker.Item label="Dewan Perintis" value="key5"/>
                                    </Picker>
                                </View>

                                <View style={{marginTop:normalize(20), paddingBottom:normalize(20)}}>
                                    <Button full rounded transparent style={{backgroundColor:'green', width:normalize(200), marginLeft:normalize(35)}}>
                                        <Text style={{fontSize:normalize(20), color:'white'}}>Daftar</Text>
                                    </Button>
                                </View>
                            </Form>
                        </Content>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centered:{
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        marginTop:normalize(100),
        alignItems:"center"
    }
})