import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native'

import ToDoItem from './ToDoItem'
import {connect} from 'react-redux'
import { ADD_ITEM } from '../redux/actions'

class ToDoItemsList extends Component {
    renderItem = ({item}) => (<ToDoItem text={item.text} />);
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar} />
                <FlatList data={this.props.items}
                    renderItem={this.renderItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    navBar: {
        height: 50,
        marginTop: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
  });

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: () => dispatch({type: ADD_ITEM })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItemsList)