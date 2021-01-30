/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 30/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deltaTrendAbsolute: [],
    deltaTrendDayVariation: [],
    percentageOfTotal: 0,

    /* Home Quarantine */
    homeQuarantine: 0,
    homeQuarantinePercentage: 0,
    homeQuarantineVariation: 0,
    homeQuarantineVariationPercentage: 0,

    /* Hospitalized with Symptoms */
    hospitalized: 0,
    hospitalizedPercentage: 0,
    hospitalizedVariation: 0,
    hospitalizedVariationPercentage: 0,

    /* Critical */
    critical: 0,
    criticalPercentage: 0,
    criticalVariation: 0,
    criticalVariationPercentage: 0,
    criticalTrendAbsolute: [],
};

export function cleanData() {
    dataToReturn.deltaTrendAbsolute = [];
    dataToReturn.deltaTrendDayVariation = [];
    dataToReturn.criticalTrendAbsolute = [];
}

const PositiveDeltaData = (data) => {
    return dataToReturn;
};


export default PositiveDeltaData;