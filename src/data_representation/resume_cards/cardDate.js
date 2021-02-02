/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {styles} from "../../ui/theme/style";
import {Text, View} from "react-native";
import {chartTitles, dataDescription} from "../../ui/contents/strings";
import Records from "../../logic/dataset";


export default class CardDate extends Component{


    render() {
        return (
            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{chartTitles.lastUpdateDate}{Records.getLastDate()}</Text>
                <Text style={[styles.indicatorValue, styles.chartDescription]}>{dataDescription.lastUpdate}</Text>
            </View>
        );
    }
}