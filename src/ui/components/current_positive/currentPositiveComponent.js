/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import CardCurrentPositive from "../../../data_representation/resume_cards/cardCurrentPositive";
import {chartTitles, dataDescription} from "../../contents/strings";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import CurrentPositiveData from "../../../logic/currentPositiveData";
import MyLineChart from "../../../data_representation/charts/lineChart";
import PositiveDeltaData from "../../../logic/positiveDeltaData";
import CardHomeQuarantine from "../../../data_representation/resume_cards/cardHomeQuarantine";
import CardHospitalizedWithSymptoms from "../../../data_representation/resume_cards/cardHospitalizedWithSymptoms";
import CardCritical from "../../../data_representation/resume_cards/cardCritical";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import PositiveRepartitionData from "../../../logic/positiveRepartitionData";
import RegionTable from "../../../data_representation/region_table/regionTable";
import PositiveRegionData from "../../../logic/region/REGION_positive";
import HospitalRegionData from "../../../logic/region/REGION_hospitalData";
import LineChartCard from "../cards/lineChartCard";

class CurrentPositiveComponent extends Component {

    constructor() {
        super();
        this.state = {data: PositiveDeltaData(), color: LegendColors.yellow}
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardCurrentPositive />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.currentPositivePercentage}</Text>
                            <MyProgressCircle value={CurrentPositiveData().positiveRatio} color={LegendColors.yellow}/>
                            <Text style={styles.chartDescription}>{chartTitles.positivePercentageDescription}</Text>
                        </View>

                        <LineChartCard
                            title={chartTitles.positiveTrendAbsolute}
                            color={this.state.color}
                            data={this.state.data.deltaTrendAbsolute}
                            description={dataDescription.positiveTotal} />

                        <LineChartCard
                            title={chartTitles.positiveTrendVariation}
                            color={this.state.color}
                            data={this.state.data.deltaTrendDayVariation}
                            description={dataDescription.positiveVariation} />

                        <CardHomeQuarantine />

                        <CardHospitalizedWithSymptoms />

                        <CardCritical />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.positiveRepartition}</Text>
                            <StackedAreaChart
                                color={LegendColors.yellow}
                                keyValues={['critical', 'hospitalized', 'homeQuarantine']}
                                legend={[chartTitles.positiveHomeQuarantine, chartTitles.hospitalizedWithSymptoms, chartTitles.critical]}
                                data={PositiveRepartitionData().repartition}/>
                            <Text style={styles.chartDescription}>{dataDescription.positiveRepartition}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default CurrentPositiveComponent;
