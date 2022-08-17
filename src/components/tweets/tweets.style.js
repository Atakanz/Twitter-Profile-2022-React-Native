import { StyleSheet } from "react-native";

export default  StyleSheet.create (
    {
   tweetOuter: {
    flexDirection:'row',
    marginLeft:15,
    paddingVertical:10,
   },
   pp: {
    width:60,
    height:60,
    borderRadius:50,
   },
   tw_profileName: {
    fontSize:17,
    fontWeight:'bold',
    color:'black',
    marginRight:3
   },
   textOuter: {
    marginLeft:10,
    flex:1
   },
   firstLine: {
    flexDirection:'row'
   },
   tw_labels: {
    marginRight:60
   },
   last_line: {
    flexDirection:'row',
   
    marginTop:10,
    justifyContent:'space-between'
   },
   tweets: {
    fontSize:18,
    color:'black'
   }

    }
)