/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    lastUpdateDate: 'undefined',
    newCases: 0,
    totalCases: 0,
    totalCurrentCases: 0,
    totalCasesVariationPercentage: 0,
    currentCasesVariation: 0,
    currentCasesVariationPercentage: 0,
    totalRecovered: 0,
    recoveredVariation: 0,
    recoveredVariationPercentage: 0,
    totalDeaths: 0,
    deathsVariation: 0,
    deathsVariationPercentage: 0,
    swab: 0,
    swabVariation: 0,
    swabVariationPercentage: 0,
    testedCases: 0,
    testedCasesVariation: 0,
    testedCasesVariationPercentage: 0
};

const latestUpdateData = (data) => {
    return dataToReturn;
};


export default latestUpdateData;
