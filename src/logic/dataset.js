/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Preprocessing from "./delivery/preprocessing";
import DateArray from "./generateDateArray";

let Records = {

    data: {
        dates: [],
        delivery: [],
        administration: [],
    },

    setAdministrationRecords(records){
        this.data.administration = records;

    },

    setDeliveryRecords(records){
        this.data.delivery = Preprocessing(records);
        this.data.dates = DateArray();
        console.log(this.data.delivery);
    },

    getRecords(){
        return this.data;
    },

};

export default Records;