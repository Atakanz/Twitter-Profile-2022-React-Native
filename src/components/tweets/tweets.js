
import React from "react";
import { View, Text, Image } from 'react-native'
import styles from './tweets.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const heart = <Icon name="heart-outline" size={15} color="black" />;
const comment = <Icon name="comment-outline" size={15} color="black" />;
const retweet = <Icon name="repeat-variant" size={18} color="black" />;
const share= <Icon name="share-variant-outline" size={18} color="black" />;

const Tweets = props => {

    return (

        <View style={styles.tweetOuter}>
            <View>
                <Image style={styles.pp} source={require('./atakan.jpg')} />
            </View>
            <View style={styles.textOuter}>
                <View style={styles.firstLine}>
                    <View>
                        <Text style={styles.tw_profileName}>Atakan Zerafet</Text>
                    </View>
                    <View>
                        <Text style={styles.tw_labels}>@atakanz</Text>
                    </View>
                    <View>
                        <Text style={styles.tw_date}>{props.date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.tweets}>{props.tweets}</Text>
                </View>

                <View style={styles.last_line}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {heart}
                        <View>
                            <Text>{props.likes}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        {comment}
                        <View>
                            <Text>{props.comments}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        {retweet}
                        <View>
                            <Text>{props.retweets}</Text>
                        </View>
                    </View>

                    <View>
                        {share}
                    </View>
                </View>



            </View>
        </View>
    )
}

export default Tweets;