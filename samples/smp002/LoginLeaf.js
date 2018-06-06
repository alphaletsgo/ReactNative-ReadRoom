/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    PixelRatio,
    Alert
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

type Props = {};
export default class LoginLeaf extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            inputNum:'',
            inputPW:''
        };
        this.updatePW = this.updatePW.bind(this);
        this.confromLogin = this.confromLogin.bind(this);
        this.option1Selected = this.option1Selected.bind(this);
    }
    updateNum(newText) {
        this.setState(()=>{
            return {
                inputNum:newText,
            };
        });
    }

    updatePW(newText) {
        this.setState(()=>{
            return {
                inputPW:newText,
            };
        });
    }

    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={(newText)=>{this.updateNum(newText)}}/>
                <Text style={styles.textPromptStyle}>您输入的手机号是：{this.state.inputNum}</Text>
                <TextInput placeholder={'请输入你的密码'} secureTextEntry={true} style={styles.textInputStyle} onChangeText={this.updatePW}/>
                <Text style={styles.bigTextPrompt} onPress={()=>this.userPressConfirm()}>确定</Text>
                <Text style={styles.bigTextPrompt} onPress={()=>this.userPressAddressBook()}>通讯录</Text>
            </View>
        )
    }

    userPressConfirm(){
        Alert.alert('确认消息','确认使用'+this.state.inputNum+'登录么？',[{text:'取消',onPress:(()=>{}),style:'cancel'},{text:'确认',onPress:this.confromLogin}]);
    }

    confromLogin(){
        this.props.onLoginPressed(this.state.inputNum,this.state.inputPW);
    }

    userPressAddressBook(){
        Alert.alert('确认Alert','内容提示',[{text:'我知道了',onPress:this.option1Selected}]);

    }

    option1Selected(){
        Alert.alert('选择Alert','内容提示'+this.state.inputNum,[
                {text:'选项一',onPress:this.optionSelected},
                {text:'选项二',onPress:this.optionSelected},
                {text:'选项三',onPress:this.optionSelected},
                {text:'选项四',onPress:this.optionSelected,style:'cancel'},
                {text:'选项五',onPress:this.optionSelected}
            ],{
                onDismiss:()=>{

                }
            });
    }

    optionSelected(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20,
        padding:5
    },
    textPromptStyle:{
        margin:widthOfMargin,
        fontSize:20,
    },
    bigTextPrompt:{
        margin:widthOfMargin,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:30
    }
});
