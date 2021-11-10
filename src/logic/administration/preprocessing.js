/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 02/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */
import {compareDateUsingDaysFromDay0, daysFromDay0} from "../../utils/dateDifference";
import AdministrationData from "./administrationData";
import AdministrationsAttrs from "./administrationsAttrs";
import divideByRegion from "../common/preprocessing";

function organizeByDate(data) {
    let dataset = new AdministrationData();
    let ita = new AdministrationsAttrs();
    ita.setRegion("ITA");
    dataset.pushToRegion(ita);
    // for each region
    for (let r = 0; r < data.length; r++) {
        let current_region = new AdministrationsAttrs();
        let index = 0;
        //for each day from day 0 to today
        for (let i = 0; i < daysFromDay0(); i++) {
            let tmp_gender = {male: 0, female: 0}, tmp_dosage = {first: 0, second: 0, third: 0, booster: 0},
                tmp_categories = {healthcare: 0, associated_healthcare: 0, rsa: 0, over80: 0, others: 0}, tmp_age = {
                    over_90: 0,
                    f80_89: 0,
                    f70_79: 0,
                    f60_69: 0,
                    f50_59: 0,
                    f40_49: 0,
                    f30_39: 0,
                    f20_29: 0,
                    f16_19: 0,
                    under16: 0
                };
            //while date equals to today
            while (index < data[r].length && compareDateUsingDaysFromDay0(i, data[r][index]["data_somministrazione"])) {
                //gender
                tmp_gender.male += data[r][index]["sesso_maschile"];
                tmp_gender.female += data[r][index]["sesso_femminile"];
                //dosage
                tmp_dosage.first += data[r][index]["prima_dose"];
                tmp_dosage.second += data[r][index]["seconda_dose"];
                tmp_dosage.third += data[r][index]["dose_aggiuntiva"];
                tmp_dosage.booster += data[r][index]["dose_booster"];
                //category
                tmp_categories.healthcare += data[r][index]["categoria_operatori_sanitari_sociosanitari"];
                tmp_categories.associated_healthcare += data[r][index]["categoria_personale_non_sanitario"];
                tmp_categories.rsa += data[r][index]["categoria_ospiti_rsa"];
                tmp_categories.over80 += data[r][index]["categoria_over80"];
                //age
                switch (data[r][index]["fascia_anagrafica"]) {
                    case '90+':
                        tmp_age.over_90 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '80-89':
                        tmp_age.f80_89 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '70-79':
                        tmp_age.f70_79 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '60-69':
                        tmp_age.f60_69 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '50-59':
                        tmp_age.f50_59 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '40-49':
                        tmp_age.f40_49 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '30-39':
                        tmp_age.f30_39 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '20-29':
                        tmp_age.f20_29 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    case '16-19':
                        tmp_age.f16_19 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                        break;
                    default:
                        tmp_age.under16 += (data[r][index]["prima_dose"] + data[r][index]["prima_dose"]);
                }
                //update index
                index++;
            }
            current_region.setRegion(data[r][0]["area"]);
            current_region.addCumulative((tmp_gender.male + tmp_gender.female));
            current_region.addVariation((tmp_gender.male + tmp_gender.female));
            current_region.addGenderCumulative(tmp_gender.male, tmp_gender.female);
            current_region.addDosageCumulative(tmp_dosage.first, tmp_dosage.second, tmp_dosage.third, tmp_dosage.booster);
            current_region.addCategoriesCumulative(tmp_categories.healthcare, tmp_categories.associated_healthcare, tmp_categories.rsa, tmp_categories.over80, tmp_categories.others);
            current_region.addAgeRepartitionCumulative(tmp_age.over_90, tmp_age.f80_89, tmp_age.f70_79, tmp_age.f60_69, tmp_age.f50_59, tmp_age.f40_49, tmp_age.f30_39, tmp_age.f20_29, tmp_age.f16_19, tmp_age.under16);
        }
        dataset.pushToRegion(current_region)
    }
    return dataset;
}


function createAllItalyResume(data) {
    for (let i = 1; i < data.regions[1].administration_cumulative.length; i++) {
        let cumulative = 0, variation = 0, gender = {male: 0, female: 0}, dosage = {first: 0, second: 0, third: 0, booster: 0},
            categories = {healthcare: 0, associated_healthcare: 0, rsa: 0, over80: 0, others: 0};
        for (let j = 1; j < data.regions.length; j++) {
            cumulative += data.regions[j].administration_cumulative[i];
            variation += data.regions[j].administration_variation[i];
            // gender
            gender.male += data.regions[j].administration_gender_cumulative.male[i];
            gender.female += data.regions[j].administration_gender_cumulative.female[i];
            // dosage
            dosage.first += data.regions[j].administration_dosage.first[i];
            dosage.second += data.regions[j].administration_dosage.second[i];
            dosage.third += data.regions[j].administration_dosage.third[i];
            dosage.booster += data.regions[j].administration_dosage.booster[i];
            // categories
            categories.healthcare += data.regions[j].administration_categories_cumulative.healthcare_personnel[i];
            categories.associated_healthcare += data.regions[j].administration_categories_cumulative.associated_healthcare_personnel[i];
            categories.rsa += data.regions[j].administration_categories_cumulative.rsa_patients[i];
            categories.over80 += data.regions[j].administration_categories_cumulative.over_80[i];
            categories.others += data.regions[j].administration_categories_cumulative.other[i];
        }
        data.regions[0].administration_cumulative.push(cumulative);
        data.regions[0].administration_variation.push(variation);
        // gender
        data.regions[0].administration_gender_cumulative.male.push(gender.male);
        data.regions[0].administration_gender_cumulative.female.push(gender.female);
        // dosage
        data.regions[0].administration_dosage.first.push(dosage.first);
        data.regions[0].administration_dosage.second.push(dosage.second);
        data.regions[0].administration_dosage.third.push(dosage.third);
        data.regions[0].administration_dosage.booster.push(dosage.booster);
        // categories
        data.regions[0].administration_categories_cumulative.healthcare_personnel.push(categories.healthcare);
        data.regions[0].administration_categories_cumulative.associated_healthcare_personnel.push(categories.associated_healthcare);
        data.regions[0].administration_categories_cumulative.rsa_patients.push(categories.rsa);
        data.regions[0].administration_categories_cumulative.over_80.push(categories.over80);
        data.regions[0].administration_categories_cumulative.other.push(categories.others);
    }
    return data
}

export default function AdministrationPreprocessing(data) {
    return createAllItalyResume(organizeByDate(divideByRegion(data)));
}