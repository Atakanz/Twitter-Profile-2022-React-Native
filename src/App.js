
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Buttons from './components/sv_buttons'
import Tweets from './components/tweets'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const location = <Icon name="map-marker" size={15} color="black" />;
const cal = <Icon name="calendar-month" size={15} color="black" />;


const App = () => {

  return (
    <SafeAreaView style={styles.directionEnable}>
      <View>
        <Image style={styles.coverphoto} source={require('./cover.jpg')} />
      </View>
      <View>
        <Image style={styles.profilephoto} source={require('./atakan.jpg')} />
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButton_text}>Takip et</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bio}>
        <Text style={styles.bio_name}>Atakan Zerafet</Text>
        <Text style={styles.bio_label}>@atakanz</Text>
        <Text style={styles.bio_desc}>Electrical-Electronic Engineer</Text>
      </View>

      <View style={styles.locDate}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {location}
          </View>
          <View>
            <Text style={styles.loc}>Izmir</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {cal}
          </View>
          <View>
            <Text style={styles.date}>Aralık 2014 tarihinde katıldı</Text>
          </View>

        </View>
      </View>

      <View style={styles.follows}>
        <View>
          <Text style={styles.followNumber}>353</Text>
        </View>
        <View>
          <Text style={styles.followText}>Takip edilen</Text>
        </View>

        <View>
          <Text style={styles.followNumber}>353</Text>
        </View>
        <View>
          <Text style={styles.followText}>Takipçi</Text>
        </View>
      </View>

      <View style={styles.buttonsOuter}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <Buttons title='Tweetler' />
          <Buttons title='Tweetler ve yanıtlar' />
          <Buttons title='Medya' />
          <Buttons title='Beğeniler' />
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.directionEnable}>
          <Tweets tweets='If you want to shine like the sun, first burn like the sun.' likes='29' comments='37' retweets='48' date='10 Agu 22' />
        </View>

        <View style={styles.directionEnable}>
          <Tweets tweets='Learn from yesterday, live for today, hope for tomorrow.' likes='20' comments='30' retweets='45' date='09 Agu 22' />
        </View>

        <View style={styles.directionEnable}>
          <Tweets tweets='One thing only I know, and that is that I know nothing.' likes='30' comments='40' retweets='55' date='07 Agu 22' />
        </View>

        <View style={styles.directionEnable}>
          <Tweets tweets='A smooth sea never made a skilled sailor.' likes='80' comments='90' retweets='25' date='06 Agu 22' />
        </View>

        
      </ScrollView>







    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  directionEnable: {
    flex: 1
  },
  coverphoto: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
  },
  profilephoto: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    top: -35,
    left: 15
  },
  followButton: {
    marginLeft: 'auto',
    marginRight: 15,
    marginTop: 12,
    backgroundColor: 'black',
    borderRadius: 20
  },
  followButton_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 35,
    paddingVertical: 6
  },
  bio: {
    marginLeft: 15
  },
  bio_name: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  bio_label: {
    fontSize: 16,
    color: 'grey',
  },
  bio_desc: {
    fontSize: 18,
    color: 'black',
    marginTop: 10
  },
  locDate: {
    margin: 15,
    flexDirection: 'row',
  
  },
  loc: {
    marginRight: 15,
    fontSize: 16
  },
  date: {
    fontSize: 16
  },
  follows: {
    flexDirection: 'row',
    marginLeft: 15
  },
  followNumber: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    fontSize: 18
  },
  followText: {
    marginRight: 20,
    fontSize: 18
  },
  buttonsOuter: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    borderTopWidth: 0
  }


}
)



export default App;
