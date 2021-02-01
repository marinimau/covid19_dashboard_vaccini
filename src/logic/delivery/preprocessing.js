/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */
import {compareDateUsingDaysFromDay0, daysFromDay0} from "../../utils/dateDifference";
import DeliveryData from "./delivery_data";
import DeliveryAttrs from "./delivery_attrs";

function organizeByDate(data){
    let dataset = new DeliveryData();
    let ita = new DeliveryAttrs();
    ita.setRegion("ITA");
    dataset.pushToRegion(ita);
    // for each region
    for(let r = 0; r < data.length; r ++) {
        let current_region = new DeliveryAttrs();
        let index = 0;
        //for each day from day 0 to today
        for(let i = 0; i < daysFromDay0(); i++) {
            let tmp = 0, tmp_pfizer = 0;
            //while date equals to today
            while(index < data[r].length && compareDateUsingDaysFromDay0(i, data[r][index]["data_consegna"])) {
                //tmp += head array
                tmp += data[r][index]["numero_dosi"];
                //if variation is pfizer
                if(data[r][index]["fornitore"].toString().includes("Pfizer")){
                    //tmp_pfizer_cumulative += variation
                    tmp_pfizer += data[r][index]["numero_dosi"];
                }
                index++;
            }
            current_region.setRegion(data[r][0]["area"]);
            current_region.addCumulative(tmp);
            current_region.addVariation(tmp);
            current_region.addPfizerCumulative(tmp_pfizer);
        }
        dataset.pushToRegion(current_region)
    }
    return dataset;
}


function createAllItalyResume(data){
    for(let i = 1; i < data.regions[1].delivery_cumulative.length; i++){
        let cumulative = 0, variation = 0, pfizer_cumulative = 0, others_comulative = 0;
        for(let j = 1; j < data.regions.length; j++){
            cumulative += data.regions[j].delivery_cumulative[i];
            variation += data.regions[j].delivery_variation[i];
            pfizer_cumulative += data.regions[j].producer_cumulative.pfizer[i];
            others_comulative += data.return[j].producer_cumulative.others[i];

        }
        data.regions[0].delivery_cumulative.push(cumulative);
        data.regions[0].delivery_variation.push(variation);
        data.regions[0].producer_cumulative.pfizer.push(pfizer_cumulative);
        data.regions[0].producer_cumulative.others.push(others_comulative);
    }
    return data
}

export default function Preprocessing(data){
    return createAllItalyResume(organizeByDate(divideByRegion(data)));
}