/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 01/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import Records from "./dataset";
import dateToString from "../utils/dateToString";
import {lineChartNumLabels} from "../ui/contents/params";

let dataToReturn = {
    dateLabels: [],
    dateLabelsComplete: [],
};

const DateLabels = (range) => {

    let dates = Records.getDates();


    if(dates !== null){

        dataToReturn.dateLabels = [];
        dataToReturn.dateLabelsComplete = [];

        if( dataToReturn){
            let start = range === -1 || range === undefined ? 1 : dates.length - range;
            let incr = Math.round(((dates.length - start)) / lineChartNumLabels(range));
            for (let i = start; i < dates.length; i+=incr){
                i = Math.round(i)
                dataToReturn.dateLabels.push(dates[i]);
            }
            for(let i = start;  i < dates.length; i++){
                dataToReturn.dateLabelsComplete.push(dates[i]);
            }
        }

    }
    return dataToReturn;
};


export default DateLabels;