/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import SelectedLocation from "../selectedLocation";

let dataToReturn = {
    percentageOfTotal: 0,
    total: 0,
    lastVariation: 0,
    lastVariationPercentage: 0,
    cumulativeTrend: [],
    variationTrend: [],
    producerRepartition: [],
    producerRepartitionPercentage: []
};

export function cleanData() {
    dataToReturn.newCasesTrendAbsolute = [];
    dataToReturn.newCasesTrendDayValue = [];
    dataToReturn.producerRepartition = [];
    dataToReturn.producerRepartitionPercentage = [];
}

function populateRepartition(){
    dataToReturn.producerRepartition = [];
    dataToReturn.producerRepartitionPercentage = [];
    let dates = Records.getDates();
    let current =  Records.getRecords().delivery.regions[SelectedLocation.getLocation()].producer_cumulative;
    let total = dataToReturn.cumulativeTrend;
    for(let i = 0; i <  current.pfizer.length - 1; i++){
        dataToReturn.producerRepartition.push(
            {
                date: dates[i],
                pfizer: current.pfizer[i],
                astrazeneca: current.astrazeneca[i],
                moderna: current.moderna[i],
                johnson: current.johnson[i],
                sputnik: current.sputnik[i],
                others: current.others[i]
            }
        );
        dataToReturn.producerRepartitionPercentage.push(
            {
                date: dates[i],
                pfizer: current.pfizer[i] === 0 ? 0 : current.pfizer[i] / total[i] * 100,
                astrazeneca: current.astrazeneca[i] === 0 ? 0 : current.astrazeneca[i] / total[i] * 100,
                moderna: current.moderna[i] === 0 ? 0 : current.moderna[i] / total[i] * 100,
                johnson: current.johnson[i] === 0 ? 0 : current.johnson[i] / total[i] * 100,
                sputnik: current.sputnik[i] === 0 ? 0 : current.sputnik[i] / total[i] * 100,
                others: current.others[i]  === 0 ? 0 : current.others[i] / total[i] * 100,
            }
        )
    }
}

const DeliveryChartAttributes = () => {
    dataToReturn.total = Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative[Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative.length - 1];
    dataToReturn.lastVariation = Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_variation[Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_variation.length - 1];
    dataToReturn.lastVariationPercentage = dataToReturn.lastVariation === 0 ? 0 :
        (Math.round((dataToReturn.lastVariation / dataToReturn.total * 100)*100)/100).toFixed(2);
    let percentage = Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative[Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
        .delivery_cumulative.length - 1] / Records.getRecords().delivery.regions[0]
        .delivery_cumulative[Records.getRecords().delivery.regions[0].delivery_cumulative.length - 1] * 100;
    dataToReturn.percentageOfTotal = (Math.round(percentage*100)/100).toFixed(2);
    dataToReturn.cumulativeTrend = Records.getRecords().delivery.regions[SelectedLocation.getLocation()].delivery_cumulative;
    dataToReturn.variationTrend = Records.getRecords().delivery.regions[SelectedLocation.getLocation()].delivery_variation;
    populateRepartition();
    return dataToReturn;
};


export default DeliveryChartAttributes;