/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import DeliveryPreprocessing from "./delivery/preprocessing";
import DateArray from "./generateDateArray";
import dateToString from "../utils/dateToString";
import AdministrationPreprocessing from "./administration/preprocessing";

let Records = {

    data: {
        dates: [],
        delivery: [],
        administration: [],
    },

    setAdministrationRecords(records){
        this.data.administration = AdministrationPreprocessing(records);
        console.log(this.data.administration)
    },

    setDeliveryRecords(records){
        this.data.delivery = DeliveryPreprocessing(records);
        this.data.dates = DateArray();
    },

    getRecords(){
        return this.data;
    },

    getDates(){
        return this.data.dates;
    },

    getLastDate(){
        return dateToString(Date.now());
    }

};

export default Records;