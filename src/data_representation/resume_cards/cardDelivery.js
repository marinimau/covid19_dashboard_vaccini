/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React, {Component} from 'react';
import LegendColors from "../../ui/theme/legendColors";
import {styles} from "../../ui/theme/style";
import {Text, View} from "react-native";
import {cardTitles} from "../../ui/contents/strings";
import latestUpdateData from "../../logic/latestUpdateData";
import {ShadowOpacity} from "../../ui/contents/params";

export default class CardDelivery extends Component{


    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall, {backgroundColor: LegendColors.indigo, shadowColor: LegendColors.indigo, shadowOpacity: ShadowOpacity}]}>
                <Text style={[styles.chartTitle, styles.indicatorLight]}>{cardTitles.delivery}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorLight]}>{latestUpdateData().totalCases}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr,  styles.indicatorLight]}>{latestUpdateData().newCases} ({latestUpdateData().totalCasesVariationPercentage}%)</Text>
            </View>
        );
    }
}