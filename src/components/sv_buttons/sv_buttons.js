import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './sv_buttons.style'

const Buttons = props => {
    return (
        <View style={styles.outer}>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.titles}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons;