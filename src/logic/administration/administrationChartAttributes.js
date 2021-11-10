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
    dosageRepartitionPercentage: [],
    dosageFirstCumulative: 0,
    dosageSecondCumulative: 0,
    dosageThirdCumulative: 0,
    dosageBoosterCumulative: 0,
    dosageFirstPercentage: 0,
    dosageSecondPercentage: 0,
    dosageThirdPercentage: 0,
    dosageBoosterPercentage: 0,
    dosageFirstVariation: 0,
    dosageSecondVariation: 0,
    dosageThirdVariation: 0,
    dosageBoosterVariation: 0,
    dosageFirstVariationPercentage: 0,
    dosageSecondVariationPercentage: 0,
    dosageThirdVariationPercentage: 0,
    dosageBoosterVariationPercentage: 0,
    categories: {
        healthcare_personnel: 0,
        healthcare_percentage: 0,
        healthcare_variation: 0,
        healthcare_variation_percentage: 0,
        associated: 0,
        associated_percentage: 0,
        associated_variation: 0,
        associated_variation_percentage: 0,
        rsa: 0,
        rsa_percentage: 0,
        rsa_variation: 0,
        rsa_variation_percentage: 0,
        over80: 0,
        over80_percentage: 0,
        over80_variation: 0,
        over80_variation_percentage: 0,
        others: 0,
        others_percentage: 0,
        others_variation: 0,
        others_variation_percentage: 0,
    },
    age : {
        over_90: 0,
        f80_89: 0,
        f70_79: 0,
        f60_69: 0,
        f50_59: 0,
        f40_49: 0,
        f30_39: 0,
        f20_29: 0,
        f16_19: 0,
        under16: 0,
        over_90_percentage: 0,
        f80_89_percentage: 0,
        f70_79_percentage: 0,
        f60_69_percentage: 0,
        f50_59_percentage: 0,
        f40_49_percentage: 0,
        f30_39_percentage: 0,
        f20_29_percentage: 0,
        f16_19_percentage: 0,
        under16_percentage: 0,
        over_90_variation: 0,
        f80_89_variation: 0,
        f70_79_variation: 0,
        f60_69_variation: 0,
        f50_59_variation: 0,
        f40_49_variation: 0,
        f30_39_variation: 0,
        f20_29_variation: 0,
        f16_19_variation: 0,
        under16_variation: 0,
        over_90_variation_percentage: 0,
        f80_89_variation_percentage: 0,
        f70_79_variation_percentage: 0,
        f60_69_variation_percentage: 0,
        f50_59_variation_percentage: 0,
        f40_49_variation_percentage: 0,
        f30_39_variation_percentage: 0,
        f20_29_variation_percentage: 0,
        f16_19_variation_percentage: 0,
    }
};

export function cleanData() {
    dataToReturn.cumulativeTrend = [];
    dataToReturn.variationTrend = [];
    dataToReturn.genderRepartition = [];
    dataToReturn.genderRepartitionPercentage = [];
    dataToReturn.dosageRepartition = [];
    dataToReturn.dosageRepartitionPercentage = []
}

function populateGenderRepartition() {
    dataToReturn.genderRepartition = [];
    dataToReturn.genderRepartitionPercentage = [];
    let dates = Records.getDates();
    let current = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_gender_cumulative;
    for (let i = 0; i < current.male.length - 1; i++) {
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
                male: current.male[i] === 0 ? 0 : current.male[i] / (current.male[i] + current.female[i]) * 100,
                female: current.female[i] === 0 ? 0 : current.female[i] / (current.male[i] + current.female[i]) * 100,
            }
        )
    }
}

function populateDosageRepartition() {
    dataToReturn.dosageRepartition = [];
    dataToReturn.dosageRepartitionPercentage = [];
    let dates = Records.getDates();
    let current = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_dosage;
    let i = 0
    for (; i < current.first.length - 1; i++) {
        dataToReturn.dosageRepartition.push(
            {
                date: dates[i],
                first: current.first[i],
                second: current.second[i],
                third: current.third[i],
                booster: current.booster[i],
            }
        );
        dataToReturn.dosageRepartitionPercentage.push(
            {
                date: dates[i],
                first: current.first[i] === 0 ? 0 : current.first[i] / (current.first[i] + current.second[i]  + current.third[i] + current.booster[i]) * 100,
                second: current.second[i] === 0 ? 0 : current.second[i] / (current.first[i] + current.second[i] + current.third[i] + current.booster[i]) * 100,
                third: current.third[i] === 0 ? 0 : current.third[i] / (current.first[i] + current.second[i] + current.third[i] + current.booster[i]) * 100,
                booster: current.booster[i] === 0 ? 0 : current.booster[i] / (current.first[i] + current.second[i] + current.third[i] + current.booster[i]) * 100,
            }
        )
    }
    dataToReturn.dosageFirstCumulative = current.first[i];
    dataToReturn.dosageSecondCumulative = current.second[i];
    dataToReturn.dosageThirdCumulative = current.third[i];
    dataToReturn.dosageBoosterCumulative = current.booster[i];
    dataToReturn.dosageFirstPercentage = dataToReturn.dosageFirstCumulative === 0 ? 0 : dataToReturn.dosageFirstCumulative / dataToReturn.total * 100;
    dataToReturn.dosageSecondPercentage = dataToReturn.dosageSecondCumulative === 0 ? 0 : dataToReturn.dosageSecondCumulative / dataToReturn.total * 100;
    dataToReturn.dosageThirdPercentage = dataToReturn.dosageThirdCumulative === 0 ? 0 : dataToReturn.dosageThirdCumulative / dataToReturn.total * 100;
    dataToReturn.dosageBoosterPercentage = dataToReturn.dosageBoosterCumulative === 0 ? 0 : dataToReturn.dosageBoosterCumulative / dataToReturn.total * 100;
    dataToReturn.dosageFirstVariation = current.first[i] - current.first[i - 1];
    dataToReturn.dosageSecondVariation = current.second[i] - current.second[i - 1];
    dataToReturn.dosageThirdVariation = current.third[i] - current.third[i - 1];
    dataToReturn.dosageBoosterVariation = current.booster[i] - current.booster[i - 1];
    dataToReturn.dosageFirstVariationPercentage = dataToReturn.dosageFirstVariation === 0 ? 0 : (dataToReturn.dosageFirstVariation / dataToReturn.dosageFirstCumulative * 100);
    dataToReturn.dosageSecondVariationPercentage = dataToReturn.dosageSecondVariation === 0 ? 0 : (dataToReturn.dosageSecondVariation / dataToReturn.dosageSecondCumulative * 100);
    dataToReturn.dosageThirdVariationPercentage = dataToReturn.dosageThirdVariation === 0 ? 0 : (dataToReturn.dosageThirdVariation / dataToReturn.dosageThirdCumulative * 100);
    dataToReturn.dosageBoosterVariationPercentage = dataToReturn.dosageBoosterVariation === 0 ? 0 : (dataToReturn.dosageBoosterVariation / dataToReturn.dosageBoosterCumulative * 100);
}


const AdministrationChartAttributes = () => {
    dataToReturn.total = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative.length - 1];
    dataToReturn.lastVariation = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_variation[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_variation.length - 1];
    dataToReturn.lastVariationPercentage = dataToReturn.lastVariation === 0 ? 0 :
        (Math.round((dataToReturn.lastVariation / dataToReturn.total * 100) * 100) / 100).toFixed(2);
    let percentage = Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative[Records.getRecords().administration.regions[SelectedLocation.getLocation()]
        .administration_cumulative.length - 1] / Records.getRecords().administration.regions[0]
        .administration_cumulative[Records.getRecords().administration.regions[0].administration_cumulative.length - 1] * 100;
    dataToReturn.percentageOfTotal = (Math.round(percentage * 100) / 100).toFixed(2);
    dataToReturn.cumulativeTrend = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_cumulative;
    dataToReturn.variationTrend = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_variation;
    populateGenderRepartition();
    populateDosageRepartition();
    return dataToReturn;
};


export default AdministrationChartAttributes;