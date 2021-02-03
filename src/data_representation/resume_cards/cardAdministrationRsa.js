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
import AdministrationChartAttributes from "../../logic/administration/administrationChartAttributes";

export default class CardAdministrationRsa extends Component{

    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{cardTitles.administrationRsa}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold]}>{AdministrationChartAttributes().categories.rsa.toLocaleString('it')} ({AdministrationChartAttributes().categories.rsa_percentage.toLocaleString('it')}%)</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr]}>+{AdministrationChartAttributes().categories.rsa_variation.toLocaleString('it')} (+{AdministrationChartAttributes().categories.rsa_variation_percentage.toLocaleString('it')}%)</Text>
            </View>
        );
    }
}