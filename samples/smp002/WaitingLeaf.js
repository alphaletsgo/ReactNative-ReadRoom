/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';


type Props = {};
export default class WaitingLeaf extends Component<Props> {

    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <Text style={styles.textPrompStyle}>登录使用的手机号：{this.props.phoneNumber}</Text>
                <Text style={styles.textPrompStyle}>登录使用的密码:{this.props.userPW}</Text>
                <Text style={styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>返回</Text>
            </View>            
        )
    }

    onGobackPressed(){
        this.props.onGoBackPressed();
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    textPrompStyle:{
        fontSize:20
    },
    bigTextPrompt:{
        width:300,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:60
    }

});
// 属性确认
WaitingLeaf.propTypes = {
    phoneNumber: PropTypes.string,
    userPW: PropTypes.string
};
//指定属性的默认值
WaitingLeaf.defaultProps = {
    phoneNumber: '123456',
    userPW: '555'
}
