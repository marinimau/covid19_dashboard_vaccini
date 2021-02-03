/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 03/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
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
    genderRepartition: [],
    genderRepartitionPercentage: [],
    dosageRepartition: [],
    dosageRepartitionPercentage: []
};

export function cleanData() {
    dataToReturn.cumulativeTrend = [];
    dataToReturn.variationTrend = [];
    dataToReturn.genderRepartition = [];
    dataToReturn.genderRepartitionPercentage = [];
    dataToReturn.dosageRepartition = [];
    dataToReturn.dosageRepartitionPercentage = []
}

function populateGenderRepartition(){
    dataToReturn.genderRepartition = [];
    dataToReturn.genderRepartitionPercentage = [];
    let dates = Records.getDates();
    let current =  Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_gender_cumulative;
    for(let i = 0; i <  current.male.length - 1; i++){
        dataToReturn.genderRepartition.push(
            {
                date: dates[i],
                male: current.male[i],
                female: current.male[i]
            }
        );
        dataToReturn.genderRepartitionPercentage.push(
            {
                date: dates[i],
                male: current.male[i] === 0 ? 0 : current.male[i] / (current.male[i]  + current.female[i]) * 100,
                female: current.female[i]  === 0 ? 0 : current.female[i] / (current.male[i]  + current.female[i]) * 100,
            }
        )
    }
}

function populateDosageRepartition(){
    dataToReturn.dosageRepartition = [];
    dataToReturn.dosageRepartitionPercentage = [];
    let dates = Records.getDates();
    let current =  Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_dosage;
    for(let i = 0; i <  current.first.length - 1; i++){
        dataToReturn.dosageRepartition.push(
            {
                date: dates[i],
                first: current.first[i],
                second: current.second[i]
            }
        );
        dataToReturn.dosageRepartitionPercentage.push(
            {
                date: dates[i],
                first: current.first[i] === 0 ? 0 : current.first[i] / (current.first[i]  + current.second[i]) * 100,
                second: current.second[i]  === 0 ? 0 : current.second[i] / (current.first[i]  + current.second[i]) * 100,
            }
        )
    }
}

const AdministrationChartAttributes = () => {
    dataToReturn.total = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative.length - 1];
    dataToReturn.lastVariation = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_variation[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_variation.length - 1];
    dataToReturn.lastVariationPercentage = dataToReturn.lastVariation === 0 ? 0 :
        (Math.round((dataToReturn.lastVariation / dataToReturn.total * 100)*100)/100).toFixed(2);
    let percentage = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative.length - 1] / Records.getRecords().administration.regions[0]
        .administration_cumulative[Records.getRecords().administration.regions[0].administration_cumulative.length - 1] * 100;
    dataToReturn.percentageOfTotal = (Math.round(percentage*100)/100).toFixed(2);
    dataToReturn.cumulativeTrend = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_cumulative;
    dataToReturn.variationTrend = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_variation;
    populateGenderRepartition();
    populateDosageRepartition();
    return dataToReturn;
};


export default AdministrationChartAttributes;