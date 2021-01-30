/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    percentageOfTotal: 0,
    newCasesTrendAbsolute: [],
    newCasesTrendDayValue: [],
    r0Trend: [],
};

export function cleanData() {
    dataToReturn.newCasesTrendAbsolute = [];
    dataToReturn.newCasesTrendDayValue = [];
    dataToReturn.r0Trend = [];
}

const NewCasesData = (data) => {
    return dataToReturn;
};


export default NewCasesData;