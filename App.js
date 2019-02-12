import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

// import components
import Post from './components/Post'
import Account from './components/Account'

type Props = {};

export default class App extends Component<Props> {

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

	// the main view is a flatlist in which an Account component is shown every 7 Posts
	render() {
		return (
			<View style={styles.container}>
			<FlatList 
				showsVerticalScrollIndicator={false}
				data={this.state.data} 
				renderItem={({item}) => (
					<View>
						<Post title={item.title} image={item.image}/>
						{item.id % 7 == 0 ? 
							<View>
								<Text style={{margin:5, fontWeight: "bold", fontSize:18}}>Discover</Text>
								<Account/>
							</View>
							: 
							undefined
						}
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
  container: {
    flex: 1,
	backgroundColor: '#ffffff',
  }
});




