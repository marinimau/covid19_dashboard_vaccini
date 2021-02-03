/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 03/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../ui/theme/style";
import {cardTitles} from "../../ui/contents/strings";

export default class CardAdministrationOthers extends Component{

    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{cardTitles.administrationOther}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold]}>{0} ({0}%)</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr]}>+{0} (+{0}%)</Text>
            </View>
        );
    }
}