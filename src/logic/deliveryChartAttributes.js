/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import SelectedLocation from "./selectedLocation";

let dataToReturn = {
    percentageOfTotal: 0,
    deliveryCumulative: [],
    deliveryVariation: [],
};

export function cleanData() {
    dataToReturn.newCasesTrendAbsolute = [];
    dataToReturn.newCasesTrendDayValue = [];
    dataToReturn.r0Trend = [];
}

const DeliveryChartAttributes = (data) => {
    let percentage = Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative[Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative.length - 1] / Records.getRecords().delivery.regions[0]
        .delivery_cumulative[Records.getRecords().delivery.regions[0].delivery_cumulative.length - 1] * 100;
    dataToReturn.percentageOfTotal = (Math.round(percentage*100)/100).toFixed(2);
    dataToReturn.deliveryCumulative = Records.getRecords().delivery.regions[SelectedLocation.getLocation()].delivery_cumulative;
    dataToReturn.deliveryVariation = Records.getRecords().delivery.regions[SelectedLocation.getLocation()].delivery_variation
    return dataToReturn;
};


export default DeliveryChartAttributes;