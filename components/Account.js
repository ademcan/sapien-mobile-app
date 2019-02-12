import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';

// The Account components will show a horizontal FlatList with a list of accounts to follow
export default class Account extends Component<Props> {

    state = {
        data: [],
        page: 0,
        pageSize:10,
    };

    // fetch the original data on componentDidMount
    componentDidMount() {
        this._fetchData();
    }

    // fetch data will grab the first 10 elements from the server
    _fetchData = () => {
        fetch(`https://serene-beach-38011.herokuapp.com/api/faker?page=${this.state.page + 1}&per_page=${this.state.pageSize}`)
        .then(response => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({data: this.state.page === 0
                ? responseJson
                : [...this.state.data, ...responseJson], page: this.state.page + 1})
        })
        .catch((error) => {
            console.error(error);
        });
    }

    // on _loadMore the _fetchData function will grab the next 10 elements from the server
	_loadMore = () =>{
		this._fetchData();
	}

    render() {
        return (
            <View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.data} 
                renderItem={({item}) => (
                    <View style={styles.buttonContainer}>
                        <Image source={{uri:item.image}} style={{alignSelf:'center', justifyContent:'center', flex:3, height:100, width:100}}/>
                        <View style={{height:1, backgroundColor:'lightgrey'}}></View>
                        <View style={{flex:1, justifyContent:'center', alignSelf:'center'}}>
                            <Text>FOLLOW</Text>
                        </View>
                    </View>
                )}
                onEndReached={this._loadMore}
                onEndReachedThreshold={0.5}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        width:150,
        height:200,
        margin:5,
        backgroundColor: '#ffffff',
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5
    }
  })



