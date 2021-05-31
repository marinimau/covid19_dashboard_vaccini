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

function populateAges(){
    let dataset = Records.getRecords().administration.regions[SelectedLocation.getLocation()].administration_age_cumulative;
    let last_index = dataset.administration_age_cumulative.f80_89.length - 1;
    dataToReturn.age.over_90 = dataset.over_90[last_index];
    dataToReturn.age.f80_89 = dataset.f80_89[last_index];
    dataToReturn.age.f70_79 = dataset.f70_79[last_index];
    dataToReturn.age.f60_69 = dataset.f60_69[last_index];
    dataToReturn.age.f50_59 = dataset.f50_59[last_index];
    dataToReturn.age.f40_49 = dataset.f40_49[last_index];
    dataToReturn.age.f30_39 = dataset.f30_39[last_index];
    dataToReturn.age.f20_29 = dataset.f20_29[last_index];
    dataToReturn.age.f16_19 = dataset.f16_19[last_index];
    dataToReturn.age.under16 = dataset.under16[last_index];
    dataToReturn.age.over_90_percentage = 0;
    dataToReturn.age.f80_89_percentage = 0;
    dataToReturn.age.f70_79_percentage = 0;
    dataToReturn.age.f60_69_percentage = 0;
    dataToReturn.age.f50_59_percentage = 0;
    dataToReturn.age.f40_49_percentage = 0;
    dataToReturn.age.f30_39_percentage = 0;
    dataToReturn.age.f20_29_percentage = 0;
    dataToReturn.age.f16_19_percentage = 0;
    dataToReturn.age.under16_percentage = 0;
    dataToReturn.age.over_90_variation = 0;
    dataToReturn.age.f80_89_variation = 0;
    dataToReturn.age.f70_79_variation = 0;
    dataToReturn.age.f60_69_variation = 0;
    dataToReturn.age.f50_59_variation = 0;
    dataToReturn.age.f40_49_variation = 0;
    dataToReturn.age.f30_39_variation = 0;
    dataToReturn.age.f20_29_variation = 0;
    dataToReturn.age.f16_19_variation = 0;
    dataToReturn.age.under16_variation = 0;
    dataToReturn.age.over_90_variation_percentage = 0;
    dataToReturn.age.f80_89_variation_percentage = 0;
    dataToReturn.age.f70_79_variation_percentage = 0;
    dataToReturn.age.f60_69_variation_percentage = 0;
    dataToReturn.age.f50_59_variation_percentage = 0;
    dataToReturn.age.f40_49_variation_percentage = 0;
    dataToReturn.age.f30_39_variation_percentage = 0;
    dataToReturn.age.f20_29_variation_percentage = 0;
    dataToReturn.age.f16_19_variation_percentage = 0;
    
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
    populateAges();
    return dataToReturn;
};


export default AdministrationChartAttributes;