/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Switch, Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import CardAdministration from "../../../data_representation/resume_cards/cardAdministration";
import {
    administrationChartDescriptions,
    administrationChartTitles, dataDescription, deliveryChartDescriptions,
} from "../../contents/strings";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import LineChartCard from "../cards/lineChartCard";
import AdministrationChartAttributes from "../../../logic/administration/administrationChartAttributes";
import {EventRegister} from "react-native-event-listeners";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";

let dataChangedListener;

class AdministrationComponent extends Component {

    constructor() {
        super();
        this.state = {
            data: AdministrationChartAttributes(),
            color: LegendColors.pink,
            value: 0,
            percentageForGenderRepartition: false,
            genderRepartitionTitle: administrationChartTitles.genderRepartitionAbsolute,
            genderRepartitionDescription: administrationChartDescriptions.genderRepartitionAbsolute,}
    }

    genderRepartitionSwitchChange(){
        if(!this.state.percentageForGenderRepartition){
            this.setState({
                percentageForGenderRepartition: true,
                genderRepartitionTitle: administrationChartTitles.genderRepartitionPercentage,
                genderRepartitionDescription: administrationChartDescriptions.genderRepartitionPercentage
            })
        }
        else {
            this.setState({
                percentageForGenderRepartition: false,
                genderRepartitionTitle: administrationChartTitles.genderRepartitionAbsolute,
                genderRepartitionDescription: administrationChartDescriptions.genderRepartitionAbsolute
            })
        }

    }

    componentDidMount() {
        dataChangedListener = EventRegister.addEventListener('locationChanged', (data) => {
            this.updateData();
        });
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(dataChangedListener)
    }

    updateData(){
        this.setState({data: AdministrationChartAttributes()});
    }

    render() {
        return (
            <MainScrollableContents>
                <>
                    <CardAdministration/>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                        <Text style={[styles.chartTitle]}>{administrationChartTitles.percentageOfTotal}</Text>
                        <MyProgressCircle value={this.state.data.percentageOfTotal} color={this.state.color}/>
                        <Text style={styles.chartDescription}>{administrationChartDescriptions.percentageOfTotal}</Text>
                    </View>

                    <LineChartCard
                        key={this.state.data}
                        title={administrationChartTitles.cumulativeTrend}
                        color={this.state.color}
                        data={this.state.data.cumulativeTrend}
                        description={administrationChartDescriptions.cumulativeTrend}/>

                    <LineChartCard
                        key={this.state.data}
                        title={administrationChartTitles.variationTrend}
                        color={this.state.color}
                        data={this.state.data.variationTrend}
                        description={administrationChartDescriptions.variationTrend}/>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                        <Text style={styles.chartTitle}>{this.state.genderRepartitionTitle}</Text>
                        <View style={[{flexDirection: "row"}]}>
                            <Text style={[styles.chartManipulationDescription]}>
                                {dataDescription.showPercentage}
                            </Text>
                            <Switch
                                key={3}
                                style={{marginLeft: 6}}
                                onValueChange={() => this.genderRepartitionSwitchChange()}
                                value={this.state.percentageForGenderRepartition}
                            />
                        </View>
                        {
                            this.state.percentageForGenderRepartition ?
                                <StackedAreaChart
                                    key={0}
                                    color={LegendColors.indigo}
                                    colors={[LegendColors.indigo, LegendColors.pink]}
                                    keyValues={['male', 'female']}
                                    legend={administrationChartDescriptions.gender}
                                    data={this.state.data.genderRepartitionPercentage}/>
                                :
                                <StackedAreaChart
                                    key={1}
                                    color={LegendColors.indigo}
                                    colors={[LegendColors.indigo, LegendColors.pink]}
                                    keyValues={['male', 'female']}
                                    legend={administrationChartDescriptions.gender}
                                    data={this.state.data.genderRepartition}/>

                        }
                        <Text style={styles.chartDescription}>{this.state.genderRepartitionDescription}</Text>
                    </View>
                    {/*
                    <CardHomeQuarantine />

                    <CardHospitalizedWithSymptoms />

                    <CardCritical />

                    <LineChartCard
                        title={chartTitles.criticalTrendAbsolute}
                        color={this.state.color}
                        data={this.state.data.criticalTrendAbsolute}
                        description={dataDescription.criticalTrendAbsolute} />
                        */}

                </>
            </MainScrollableContents>
        )
    }

}

export default AdministrationComponent;
