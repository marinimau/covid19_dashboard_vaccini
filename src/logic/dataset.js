/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import SelectedLocation from "./selectedLocation";

let Records = {

    data: {
        delivery: [],
        administration: [],
    },
    singleRegionData: [],

    setAdministrationRecords(records){
        this.data.administration = records;
    },

    setDeliveryRecords(records){
        this.data.delivery = records;
    },

    getRecords(){
        console.log('location index: ' + SelectedLocation.getLocation());

        if(SelectedLocation.getLocation() <= 0){
            console.log(this.data);
            return this.data;
        }
        else {

        }
    },

};

export default Records;