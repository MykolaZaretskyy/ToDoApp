import React, {Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native'

export default class ToDoItem extends Component {
    render(){
        return (
            <Text style={styles.item}> {this.props.text} </Text>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10,
        height: 44
    }
  });