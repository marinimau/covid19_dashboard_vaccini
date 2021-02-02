/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 01/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

export default function divideByRegion(data){
    let dataToReturn = [];
    let tmp = [];
    let count_regions = 0, i;
    for(i = 0; i < data.length; i++){
        if(i !== 0 && data[i]["area"] !== data[i-1]["area"]){
            if(count_regions > 20){
                dataToReturn[i % 21].concat(tmp)
            } else {
                dataToReturn.push(tmp);
            }
            count_regions ++;
            tmp = [];
        }
        tmp.push(data[i]);
    }
    if(count_regions > 20){
        dataToReturn[i % 21].concat(tmp)
    } else {
        dataToReturn.push(tmp);
    }
    return dataToReturn.length === 21 ? dataToReturn : [];
}

export function simpleDivision(data){
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
    return dataToReturn.length === 21 ? dataToReturn : [];
}