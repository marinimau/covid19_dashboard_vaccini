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
    dosageFirstPercentage: 0,
    dosageSecondPercentage: 0,
    dosageFirstVariation: 0,
    dosageSecondVariation: 0,
    dosageFirstVariationPercentage: 0,
    dosageSecondVariationPercentage: 0,
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
    for (let i = 0; i < current.first.length - 1; i++) {
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
                first: current.first[i] === 0 ? 0 : current.first[i] / (current.first[i] + current.second[i]) * 100,
                second: current.second[i] === 0 ? 0 : current.second[i] / (current.first[i] + current.second[i]) * 100,
            }
        )
    }
    dataToReturn.dosageFirstCumulative = current.first[i];
    dataToReturn.dosageSecondCumulative = current.second[i];
    dataToReturn.dosageFirstPercentage = dataToReturn.dosageFirstCumulative === 0 ? 0 : dataToReturn.dosageFirstCumulative / dataToReturn.total * 100;
    dataToReturn.dosageSecondPercentage = dataToReturn.dosageSecondCumulative === 0 ? 0 : dataToReturn.dosageSecondCumulative / dataToReturn.total * 100;
    dataToReturn.dosageFirstVariation = current.first[i] - current.first[i - 1];
    dataToReturn.dosageSecondVariation = current.second[i] - current.second[i - 1];
    dataToReturn.dosageFirstVariationPercentage = dataToReturn.dosageFirstVariation === 0 ? 0 : (dataToReturn.dosageFirstVariation / dataToReturn.dosageFirstCumulative * 100);
    dataToReturn.dosageSecondVariationPercentage = dataToReturn.dosageSecondVariation === 0 ? 0 : (dataToReturn.dosageSecondVariation / dataToReturn.dosageSecondCumulative * 100);
}

function populateCategories() {
    let dataset = Records.getRecords().administration.regions[SelectedLocation.getLocation()];
    let last_index = dataset.administration_categories_cumulative.healthcare_personnel.length - 1;
    // total
    dataToReturn.categories.healthcare_personnel = dataset.administration_categories_cumulative.healthcare_personnel[last_index];
    dataToReturn.categories.associated = dataset.administration_categories_cumulative.associated_healthcare_personnel[last_index];
    dataToReturn.categories.rsa = dataset.administration_categories_cumulative.rsa_patients[last_index];
    dataToReturn.categories.over80 = dataset.administration_categories_cumulative.over_80[last_index];
    dataToReturn.categories.others = dataset.administration_categories_cumulative.other[last_index];
    //percentage
    dataToReturn.categories.healthcare_percentage = (Math.round(dataToReturn.categories.healthcare_personnel / dataToReturn.total * 10000) / 100).toFixed(2);
    dataToReturn.categories.associated_percentage = (Math.round(dataToReturn.categories.associated / dataToReturn.total * 10000) / 100).toFixed(2);
    dataToReturn.categories.rsa_percentage = (Math.round(dataToReturn.categories.rsa / dataToReturn.total * 10000) / 100).toFixed(2);
    dataToReturn.categories.over80_percentage = (Math.round(dataToReturn.categories.over80 / dataToReturn.total * 10000) / 100).toFixed(2);
    dataToReturn.categories.others_percentage = (Math.round(dataToReturn.categories.others / dataToReturn.total * 10000) / 100).toFixed(2);
    // variation
    dataToReturn.categories.healthcare_variation = dataset.administration_categories_cumulative.healthcare_personnel[last_index] - dataset.administration_categories_cumulative.healthcare_personnel[last_index - 1];
    dataToReturn.categories.associated_variation = dataset.administration_categories_cumulative.associated_healthcare_personnel[last_index] - dataset.administration_categories_cumulative.associated_healthcare_personnel[last_index - 1];
    dataToReturn.categories.rsa_variation = dataset.administration_categories_cumulative.rsa_patients[last_index] - dataset.administration_categories_cumulative.rsa_patients[last_index - 1];
    dataToReturn.categories.over80_variation = dataset.administration_categories_cumulative.over_80[last_index] - dataset.administration_categories_cumulative.over_80[last_index - 1];
    dataToReturn.categories.others_variation = dataset.administration_categories_cumulative.other[last_index] - dataset.administration_categories_cumulative.other[last_index - 1];
    // variation percentage
    dataToReturn.categories.healthcare_variation_percentage = dataToReturn.categories.healthcare_variation === 0 ? 0 : (Math.round(dataToReturn.categories.healthcare_variation / dataToReturn.categories.healthcare_personnel * 10000) / 100).toFixed(2);
    dataToReturn.categories.associated_variation_percentage = dataToReturn.categories.associated_variation === 0 ? 0 : (Math.round(dataToReturn.categories.associated_variation / dataToReturn.categories.associated * 10000) / 100).toFixed(2);
    dataToReturn.categories.rsa_variation_percentage = dataToReturn.categories.rsa_variation === 0 ? 0 : (Math.round(dataToReturn.categories.rsa_variation / dataToReturn.categories.rsa * 10000) / 100).toFixed(2);
    dataToReturn.categories.over80_variation_percentage = dataToReturn.categories.over80_variation === 0 ? 0 : (Math.round(dataToReturn.categories.over80_variation / dataToReturn.categories.over80 * 10000) / 100).toFixed(2);
    dataToReturn.categories.others_variation_percentage = dataToReturn.categories.others_variation === 0 ? 0 : (Math.round(dataToReturn.categories.others_variation / dataToReturn.categories.others * 10000) / 100).toFixed(2);
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
    populateCategories();
    return dataToReturn;
};


export default AdministrationChartAttributes;