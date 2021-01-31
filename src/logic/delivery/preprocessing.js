/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */
import {compareDateUsingDaysFromDay0, daysFromDay0} from "../../utils/dateDifference";
import DeliveryData from "./delivery_data";
import DeliveryAttrs from "./delivery_attrs";

function divideByRegion(data){
    let dataToReturn = [];
    let tmp = [];
    for(let i = 0; i < data.length; i++){
        if(i !== 0 && data[i]["area"] !== data[i-1]["area"]){
            dataToReturn.push(tmp);
            tmp = [];
        }
        tmp.push(data[i]);
    }
    dataToReturn.push(tmp);
    console.log(dataToReturn);
    return dataToReturn.length === 21 ? dataToReturn : [];
}

function organizeByDate(data){
    let dataset = new DeliveryData();

    // for each region
    for(let r = 0; r < data.length; r ++) {
        let current_region = new DeliveryAttrs();
        //for each day from day 0 to today
        for(let i = 0; i < daysFromDay0(); i++) {
            let tmp = 0, tmp_pfizer = 0, index = 0;
            //while date equals to today
            while(compareDateUsingDaysFromDay0(i, data[r][index]["data_consegna"])) {
                console.log("entrato2");
                //tmp += head array
                tmp += data[r][index]["numero_dosi"];
                //if variation is pfizer
                if(data[r][index]["fornitore"]==="Pfizer\\/BioNTech"){
                    //tmp_pfizer_cumulative += variation
                    tmp_pfizer += data[r][index]["numero_dosi"];
                }
                index++;
            }
            current_region.setRegion('Regione');
            current_region.addCumulative(tmp);
            current_region.addVariation(tmp);
            current_region.addPfizerCumulative(tmp_pfizer);
        }
        dataset.pushToRegion(current_region)
    }
    return dataset;
}

export default function Preprocessing(data){
    return organizeByDate(divideByRegion(data));
}