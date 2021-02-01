/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 01/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import dateToString from "../utils/dateToString";

let array_dates = [];


const DateArray = () => {
    let currentDate = new Date('2020-12-15T00:00:00Z');
    while (new Date(currentDate) <= Date.now()) {
        array_dates.push(dateToString(currentDate.toString()));
        currentDate = new Date(currentDate).setDate( new Date(currentDate).getDate() + 1);
    }
    return array_dates;
};


export default DateArray;