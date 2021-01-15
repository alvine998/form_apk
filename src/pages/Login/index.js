import { Button, Content, Form, Icon, Input, Item, Label } from 'native-base';
import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View , ScrollView} from 'react-native';
import normalize from 'react-native-normalize';


// Import Images
import logo from '../../assets/images/logo_form.png';
import close from '../../assets/images/closed-eye.png';
import open from '../../assets/images/opened-eye.png';


export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            hidePassword: true,
        };
    }

    // changePwd = () => {
    //     let newState;
    //     if(this.state.showPassword) {
    //         newState = {
    //             icon: 'eye',
    //             showPassword: true,
    //             pass: this.state.pass
    //         }
    //     } else {
    //         newState = {
    //             icon: 'eye-slash',
    //             showPassword: false,
    //             pass: this.state.pass
    //         }
    //     }
    //     this.setState(newState)
    // };

    setFocus(hasFocus){
        this.setState({hasFocus})
    }

    // handlePass = (pass) => {
    //     let newState = {
    //         icon: this.state.icon,
    //         showPassword: this.state.showPassword,
    //         pass: pass
    //     }
    //     this.setState(newState);
    // };


    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }


    render(){
        return(
            <ScrollView>
                <View style={styles.centered}>
                    <Image source={logo} style={{width:normalize(200), height:normalize(200)}} />
                    <Text style={{marginTop:normalize(20), fontSize:normalize(30)}}>LOGIN</Text>

                    <View style={{marginTop:normalize(0)}}>
                        <Content>
                            <Form>
                                <Item floatingLabel style={{width:normalize(270)}}>
                                    <Label>Username/No Ponsel</Label>
                                    <Input/>
                                </Item>
                                <Item floatingLabel style={{width:normalize(270)}}>
                                    <Label>Password</Label>
                                    <Input onFocus={this.state.pass} editable={true} multiline={false} secureTextEntry={this.state.hidePassword}/>
                                </Item>
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity style={{marginTop:normalize(10), marginLeft:normalize(20)}} onPress={this.setPasswordVisibility}>
                                        <Icon type={'FontAwesome5'} name={(this.state.hidePassword) ? 'eye-slash' : 'eye' } />
                                    </TouchableOpacity>
                                    <Text style={{marginTop:normalize(15), marginLeft:normalize(10)}}>Lihat Password</Text>
                                </View>
                            </Form>
                            <View style={{marginTop:normalize(40)}}>
                                <Button full rounded transparent style={{backgroundColor:'green'}}>
                                    <Text style={{color:'white', fontSize:normalize(18)}}>Masuk</Text>
                                </Button>
                            </View>
                            <View style={{marginTop:normalize(20)}}>
                                <Button full rounded transparent style={{backgroundColor:'#808080'}}>
                                    <Text style={{color:'white', fontSize:normalize(18)}}>Daftar</Text>
                                </Button>
                            </View>
                        </Content>
                    </View>
                </View>               
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    centered:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:normalize(200)
    },
    imageStyle:{
        width:normalize(100),
        height:normalize(100),
        resizeMode:'contain'
    }
})