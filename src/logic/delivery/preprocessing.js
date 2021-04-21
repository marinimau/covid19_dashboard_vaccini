/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */
import {compareDateUsingDaysFromDay0, daysFromDay0} from "../../utils/dateDifference";
import DeliveryData from "./deliveryData";
import DeliveryAttrs from "./deliveryAttrs";
import divideByRegion from "../common/preprocessing";

function evaluateProducer(producer_string){
    producer_string = producer_string.toString().toLowerCase();
    if(producer_string.includes('pfizer'))
        return 0;
    if(producer_string.includes('astrazeneca'))
        return 1;
    if(producer_string.includes('moderna'))
        return 2;
    if(producer_string.includes('janessen'))
        return 3;
    if(producer_string.includes('sputnik'))
        return 4;
    return 5;
}

function organizeByDate(data){
    let dataset = new DeliveryData();
    let ita = new DeliveryAttrs();
    let producer_index;
    ita.setRegion("ITA");
    dataset.pushToRegion(ita);
    // for each region
    for(let r = 0; r < data.length; r ++) {
        let current_region = new DeliveryAttrs();
        let index = 0;
        //for each day from day 0 to today
        for(let i = 0; i < daysFromDay0(); i++) {
            let tmp = 0, tmp_pfizer = 0, tmp_astra = 0, tmp_moderna = 0, tmp_johnson = 0, tmp_sputnik = 0, tmp_other = 0;
            //while date equals to today
            while(index < data[r].length && compareDateUsingDaysFromDay0(i, data[r][index]["data_consegna"])) {
                //tmp += head array
                tmp += data[r][index]["numero_dosi"];
                //if variation is pfizer
                producer_index = evaluateProducer(data[r][index]["fornitore"]);
                switch(producer_index){
                    case 0:
                        tmp_pfizer += data[r][index]["numero_dosi"];
                        break;
                    case 1:
                        tmp_astra += data[r][index]["numero_dosi"];
                        break;
                    case 2:
                        tmp_moderna += data[r][index]["numero_dosi"];
                        break;
                    case 3:
                        tmp_johnson += data[r][index]["numero_dosi"];
                        break;
                    case 4:
                        tmp_sputnik += data[r][index]["numero_dosi"];
                        break;
                    case 5:
                        tmp_other += data[r][index]["numero_dosi"];
                        break;
                }
                index++;
            }
            current_region.setRegion(data[r][0]["area"]);
            current_region.addCumulative(tmp);
            current_region.addVariation(tmp);
            current_region.addPfizerCumulative(tmp_pfizer, tmp_astra, tmp_moderna, tmp_johnson, tmp_sputnik, tmp_other);
        }
        dataset.pushToRegion(current_region)
    }
    return dataset;
}


function createAllItalyResume(data){
    for(let i = 1; i < data.regions[1].delivery_cumulative.length; i++){
        let cumulative = 0, variation = 0, pfizer_cumulative = 0, astra_cumulative = 0, moderna_cumulative = 0, johnson_cumulative = 0, sputnik_cumulative = 0, others_comulative = 0;
        for(let j = 1; j < data.regions.length; j++){
            cumulative += data.regions[j].delivery_cumulative[i];
            variation += data.regions[j].delivery_variation[i];
            pfizer_cumulative += data.regions[j].producer_cumulative.pfizer[i];
            astra_cumulative += data.regions[j].producer_cumulative.astrazeneca[i];
            moderna_cumulative += data.regions[j].producer_cumulative.moderna[i];
            johnson_cumulative += data.regions[j].producer_cumulative.johnson[i];
            sputnik_cumulative += data.regions[j].producer_cumulative.sputnik[i];
            others_comulative += data.regions[j].producer_cumulative.others[i];
        }
        data.regions[0].delivery_cumulative.push(cumulative);
        data.regions[0].delivery_variation.push(variation);
        data.regions[0].producer_cumulative.pfizer.push(pfizer_cumulative);
        data.regions[0].producer_cumulative.astrazeneca.push(astra_cumulative);
        data.regions[0].producer_cumulative.moderna.push(moderna_cumulative);
        data.regions[0].producer_cumulative.johnson.push(johnson_cumulative);
        data.regions[0].producer_cumulative.sputnik.push(sputnik_cumulative);
        data.regions[0].producer_cumulative.others.push(others_comulative);
    }
    return data
}

export default function DeliveryPreprocessing(data){
    return createAllItalyResume(organizeByDate(divideByRegion(data)));
}