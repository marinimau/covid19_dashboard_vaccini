/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 01/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

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