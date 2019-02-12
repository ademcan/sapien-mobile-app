import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';

// The Post componet fills the main FlatList with a list of posts 
export default class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1, backgroundColor:'#5820e2'}}></View>
                    <View style={{flex:30, width:'95%', height:150, margin:2, alignSelf:'center'}}>
                        <Text style={{alignSelf:'center', fontWeight: "bold"}}>{this.props.title.substring(0,40)}</Text>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Image source={{uri:this.props.image}} style={{height:100, width:100, flex:1}} resizeMode ={'contain'}/>
                            <View style={{flex:3}}>
                                <Text style={{ margin:10, alignSelf:'center', justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue augue sit amet mauris aliquam blandit nec non leo. </Text>
                                <View style={{alignSelf:'flex-end', flexDirection:'row', paddingRight:20}}>
                                    <Image style={{ width: 25, height: 25, alignSelf:'flex-end', marginRight:5}} source={require('../images/message.png')}/>
                                    <Image style={{ width: 25, height: 25, alignSelf:'flex-end'}} source={require('../images/bookmark.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, backgroundColor:'#5820e2'}}></View>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, height:1, backgroundColor:'#5820e2'}}></View>
                    <View style={{flex:30, width:'95%', height:1, backgroundColor:'lightgray'}}></View>
                    <View style={{flex:1, height:1, backgroundColor:'#5820e2'}}></View>
                </View>
            </View>
        );
    }
}
