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

function organizeByDate(data){
    let dataset = new AdministrationData();
    let ita = new AdministrationsAttrs();
    ita.setRegion("ITA");
    dataset.pushToRegion(ita);
    // for each region
    for(let r = 0; r < data.length; r ++) {
        let current_region = new AdministrationsAttrs();
        let index = 0;
        //for each day from day 0 to today
        for(let i = 0; i < daysFromDay0(); i++) {
            let tmp_gender = {male: 0, female: 0}, tmp_dosage = {first: 0, second: 0},
                tmp_categories = {healthcare: 0, associated_healthcare: 0, rsa: 0, over80: 0, others: 0};
            //while date equals to today
            while(index < data[r].length && compareDateUsingDaysFromDay0(i, data[r][index]["data_somministrazione"])) {
                //gender
                tmp_gender.male += data[r][index]["sesso_maschile"];
                tmp_gender.female += data[r][index]["sesso_femminile"];
                //dosage
                tmp_dosage.first += data[r][index]["prima_dose"];
                tmp_dosage.second += data[r][index]["seconda_dose"];
                //category
                tmp_categories.healthcare += data[r][index]["categoria_operatori_sanitari_sociosanitari"];
                tmp_categories.associated_healthcare += data[r][index]["categoria_personale_non_sanitario"];
                tmp_categories.rsa += data[r][index]["categoria_ospiti_rsa"];
                tmp_categories.over80 += data[r][index]["categoria_over80"];
                //update index
                index++;
            }
            current_region.setRegion(data[r][0]["area"]);
            current_region.addCumulative((tmp_gender.male + tmp_gender.female));
            current_region.addVariation((tmp_gender.male + tmp_gender.female));
            current_region.addGenderCumulative(tmp_gender.male, tmp_gender.female);
            current_region.addDosageCumulative(tmp_dosage.first, tmp_dosage.second);
            current_region.addCategoriesCumulative(tmp_categories.healthcare, tmp_categories.associated_healthcare, tmp_categories.rsa, tmp_categories.over80, tmp_categories.others);
        }
        dataset.pushToRegion(current_region)
    }
    return dataset;
}


function createAllItalyResume(data){
    for(let i = 1; i < data.regions[1].administration_cumulative.length; i++){
        let cumulative = 0, variation = 0, gender = {male: 0, female: 0}, dosage = {first: 0, second: 0},
            categories = {healthcare: 0, associated_healthcare: 0, rsa: 0, over80: 0, others: 0};
        for(let j = 1; j < data.regions.length; j++){
            cumulative += data.regions[j].administration_cumulative[i];
            variation += data.regions[j].administration_variation[i];
            // gender
            gender.male += data.regions[j].administration_gender_cumulative.male[i];
            gender.female += data.regions[j].administration_gender_cumulative.female[i];
            // dosage
            dosage.first = data.regions[j].administration_dosage.first[i];
            dosage.second = data.regions[j].administration_dosage.second[i];
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
        // categories
        data.regions[0].administration_categories_cumulative.healthcare_personnel.push(categories.healthcare);
        data.regions[0].administration_categories_cumulative.associated_healthcare_personnel.push(categories.associated_healthcare);
        data.regions[0].administration_categories_cumulative.rsa_patients.push(categories.rsa);
        data.regions[0].administration_categories_cumulative.over_80.push(categories.over80);
        data.regions[0].administration_categories_cumulative.other.push(categories.others);
    }
    return data
}

export default function AdministrationPreprocessing(data){
    return createAllItalyResume(organizeByDate(divideByRegion(data)));
}