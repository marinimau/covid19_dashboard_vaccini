/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 12/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import SelectedLocation from "../selectedLocation";

let dataToReturn = {
    percentageOfTotal: 0,
};

const DeliveryAdministrationRatioAttributes = () => {
    dataToReturn.percentageOfTotal = (Math.round(Records.getRecords().administration
            .regions[SelectedLocation.getLocation()].administration_cumulative[Records.getRecords().administration
            .regions[SelectedLocation.getLocation()].administration_cumulative.length - 1] / Records.getRecords()
            .delivery.regions[SelectedLocation.getLocation()]
            .delivery_cumulative[Records.getRecords().delivery.regions[SelectedLocation.getLocation()]
            .delivery_cumulative.length - 1] * 10000)/100).toFixed(2);
    return dataToReturn;
};

export default DeliveryAdministrationRatioAttributes;