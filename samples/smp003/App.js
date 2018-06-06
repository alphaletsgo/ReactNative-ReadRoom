/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    RefreshControl,
    View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.onScrollBeginDrag = this._onScrollBeginDrag.bind(this);
        this.onScrollEndDrag = this._onScrollEndDrag.bind(this);
        this.onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
        this.onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
        this.onRefresh = this._onRefresh.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    _onScrollBeginDrag() {
        console.log('begin drag');
    }

    _onScrollEndDrag() {
        console.log('end drag');
    }

    _onMomentumScrollBegin() {
        console.log('_onMomentumScrollBegin');
    }

    _onMomentumScrollEnd() {
        console.log('_onMomentumScrollEnd');
    }

    _onRefresh() {
        console.log('onRefresh');
    }

    onScroll(aEvent) {
        console.log('onScroll');
        console.log(aEvent.nativeEvent);
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} onMomentumScrollBegin={this._onMomentumScrollBegin}
                            onMomentumScrollEnd={this._onMomentumScrollEnd}
                            onScrollBeginDrag={this._onScrollBeginDrag}
                            onScroll={this.onScroll}
                            refreshControl={
                                <RefreshControl
                                    refreshing={false}
                                    onRefresh={this._onRefresh}
                                    tintColor="#ff0000"
                                    title='loading...'
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor='#ffff00'>

                                </RefreshControl>
                            }
                            onScrollEndDrag={this._onScrollEndDrag}>
                    <View style={styles.aView}/>
                    <ScrollView style={styles.midScrollView}
                                horizontal={true}>
                        <View style={styles.bView}/>
                        <View style={styles.bView}/>
                    </ScrollView>
                    <View style={styles.aView}/>
                </ScrollView>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    scrollView: {
        backgroundColor: '#cccccc'
    },
    midScrollView: {
        height: 150,
        borderWidth: 1,
        borderColor: 'black',
    },
    aView: {
        margin: 1,
        padding: 0,
        backgroundColor: '#eaeaea',
        height: 375,
    },
    bView: {
        flex: 1,
        height: 148,
        width: 300,
        borderWidth: 1, borderColor: 'black', backgroundColor: 'gray',
    }
});


