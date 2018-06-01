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
    PixelRatio
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            inputNum:'',
            inputPW:''
        };
        this.updatePW = this.updatePW.bind(this);
    }
    updateNum(newText) {
        console.log('updateNum');
        this.setState((state)=>{
            return {
                inputNum:newText,
            };
        });
    }

    updatePW(newText) {
        console.log('updatePW');
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
                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={(newText)=>this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>您输入的手机号是：{this.state.inputNum}</Text>
                <TextInput placeholder={'请输入你的密码'} secureTextEntry={true} style={styles.textInputStyle} onChangeText={this.updatePW}/>
                <Text style={styles.bigTextPrompt}>确认</Text>
            </View>
        )
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
