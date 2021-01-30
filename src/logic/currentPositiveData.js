/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deathsRatio: 0
};

const CurrentPositiveData = (data) => {

    if(data === undefined){
        data = []
    }

    if(data !== null){
        let d = 0

        dataToReturn.positiveRatio = 34.02;

    }
    return dataToReturn;
};


export default CurrentPositiveData;