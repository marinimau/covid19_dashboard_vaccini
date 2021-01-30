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
import {chartTitles, dataDescription} from "../../contents/strings";
import CardDelivery from "../../../data_representation/resume_cards/cardDelivery";
import LegendColors from "../../theme/legendColors";
import NewCasesData from "../../../logic/newCasesData";
import LineChartCard from "../cards/lineChartCard";
import {EventRegister} from "react-native-event-listeners";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";

let dataChangedListener;

class DeliveryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { data: NewCasesData(), color: LegendColors.indigo, value: 0}
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
        this.setState({data: NewCasesData()});
    }

    render() {
        return (
            <MainScrollableContents>
                    <>
                        <CardDelivery />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.totalCasesPercentage}</Text>
                            <MyProgressCircle value={this.state.data.percentageOfTotal} color={this.state.color}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesPercentage}</Text>
                        </View>

                        <LineChartCard
                            key={this.state.data}
                            title={chartTitles.totalCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendAbsolute}
                            description={dataDescription.totalCases} />

                        <LineChartCard
                            key={this.state.data}
                            title={chartTitles.newCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendDayValue}
                            description={dataDescription.newCases} />
                    </>
            </MainScrollableContents>
        )
    }

}

export default DeliveryComponent;
