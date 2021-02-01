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
import {chartTitles, dataDescription, deliveryChartDescriptions, deliveryChartTitles} from "../../contents/strings";
import CardDelivery from "../../../data_representation/resume_cards/cardDelivery";
import LegendColors from "../../theme/legendColors";
import DeliveryChartAttributes from "../../../logic/deliveryChartAttributes";
import LineChartCard from "../cards/lineChartCard";
import {EventRegister} from "react-native-event-listeners";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";

let dataChangedListener;

class DeliveryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { data: DeliveryChartAttributes(), color: LegendColors.indigo, value: 0}
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
                            data={this.state.data.deliveryCumulative}
                            description={deliveryChartDescriptions.cumulativeTrend} />

                        <LineChartCard
                            key={this.state.data}
                            title={deliveryChartTitles.variationTrend}
                            color={this.state.color}
                            data={this.state.data.deliveryVariation}
                            description={deliveryChartDescriptions.variationTrend} />
                    </>
            </MainScrollableContents>
        )
    }

}

export default DeliveryComponent;
