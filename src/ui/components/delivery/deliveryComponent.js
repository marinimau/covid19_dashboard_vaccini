/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View, Switch} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import {chartTitles, dataDescription, deliveryChartDescriptions, deliveryChartTitles} from "../../contents/strings";
import CardDelivery from "../../../data_representation/resume_cards/cardDelivery";
import LegendColors from "../../theme/legendColors";
import DeliveryChartAttributes from "../../../logic/delivery/deliveryChartAttributes";
import LineChartCard from "../cards/lineChartCard";
import {EventRegister} from "react-native-event-listeners";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";

let dataChangedListener;

class DeliveryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: DeliveryChartAttributes(),
            color: LegendColors.indigo,
            value: 0,
            percentageForRepartition: false,
            totalChartTitle: deliveryChartTitles.repartitionAbsolute,
            totalChartDescription: deliveryChartDescriptions.repartitionAbsolute,
        }
    }

    repartitionSwitchChange(){
        if(!this.state.percentageForTotal){
            this.setState({
                percentageForTotal: true,
                totalChartTitle: deliveryChartTitles.repartitionPercentage,
                totalChartDescription: deliveryChartDescriptions.repartitionPercentage
            })
        }
        else {
            this.setState({
                percentageForTotal: false,
                totalChartTitle: deliveryChartTitles.repartitionAbsolute,
                totalChartDescription: deliveryChartDescriptions.repartitionAbsolute
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
        this.setState({data: DeliveryChartAttributes()});
    }

    render() {
        return (
            <MainScrollableContents>
                    <>
                        <CardDelivery />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{deliveryChartTitles.percentageOfTotal}</Text>
                            <MyProgressCircle value={this.state.data.percentageOfTotal} color={this.state.color}/>
                            <Text style={styles.chartDescription}>{deliveryChartDescriptions.percentageOfTotal}</Text>
                        </View>

                        <LineChartCard
                            key={this.state.data}
                            title={deliveryChartTitles.cumulativeTrend}
                            color={this.state.color}
                            data={this.state.data.cumulativeTrend}
                            description={deliveryChartDescriptions.cumulativeTrend} />

                        <LineChartCard
                            key={this.state.data}
                            title={deliveryChartTitles.variationTrend}
                            color={this.state.color}
                            data={this.state.data.variationTrend}
                            description={deliveryChartDescriptions.variationTrend} />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{this.state.totalChartTitle}</Text>
                            <View style={[{flexDirection: "row"}]}>
                                <Text style={[styles.chartManipulationDescription]}>
                                    {dataDescription.showPercentage}
                                </Text>
                                <Switch
                                    key={3}
                                    style={{marginLeft: 6}}
                                    onValueChange={() => this.repartitionSwitchChange()}
                                    value={this.state.percentageForTotal}
                                />
                            </View>
                            {
                                this.state.percentageForTotal ?
                                    <StackedAreaChart
                                        key={0}
                                        color={LegendColors.indigo}
                                        colors={[LegendColors.green, LegendColors.blue, LegendColors.purple, LegendColors.teal, LegendColors.indigo, LegendColors.pink]}
                                        keyValues={['pfizer', 'astrazeneca', 'moderna', 'johnson', 'sputnik','others']}
                                        legend={deliveryChartDescriptions.producer}
                                        data={this.state.data.producerRepartitionPercentage}/>
                                    :
                                    <StackedAreaChart
                                        key={1}
                                        color={LegendColors.indigo}
                                        colors={[LegendColors.green, LegendColors.blue, LegendColors.purple, LegendColors.teal, LegendColors.indigo, LegendColors.pink]}
                                        keyValues={['pfizer', 'astrazeneca', 'moderna', 'johnson', 'sputnik','others']}
                                        legend={deliveryChartDescriptions.producer}
                                        data={this.state.data.producerRepartition}/>

                            }
                            <Text style={styles.chartDescription}>{this.state.totalChartDescription}</Text>
                        </View>
                    </>
            </MainScrollableContents>
        )
    }

}

export default DeliveryComponent;
