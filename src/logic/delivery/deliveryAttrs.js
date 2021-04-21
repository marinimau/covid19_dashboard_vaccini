/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

export default class DeliveryAttrs {
    region = '';
    delivery_cumulative = [0];
    delivery_variation = [0];
    producer_cumulative = {
        pfizer: [0],
        astrazeneca: [0],
        moderna: [0],
        johnson: [0],
        sputnik: [0],
        others: [0]
    }

    setRegion = (region) => {
        this.region = region;
    }

    addCumulative = (item) => {
        this.delivery_cumulative.push(this.delivery_cumulative[this.delivery_cumulative.length -1] + item);
    }

    addVariation = (item) => {
        this.delivery_variation.push(item);
    }

    addPfizerCumulative = (pfizer=0, astrazeneca=0, moderna=0, johnson=0, sputnik=0, other=0) =>{
        this.producer_cumulative.pfizer.push(this.producer_cumulative.pfizer[this.producer_cumulative.pfizer.length - 1] + pfizer);
        this.producer_cumulative.astrazeneca.push(this.producer_cumulative.astrazeneca[this.producer_cumulative.astrazeneca.length - 1] + astrazeneca);
        this.producer_cumulative.moderna.push(this.producer_cumulative.moderna[this.producer_cumulative.moderna.length - 1] + moderna);
        this.producer_cumulative.johnson.push(this.producer_cumulative.johnson[this.producer_cumulative.johnson.length - 1] + johnson);
        this.producer_cumulative.sputnik.push(this.producer_cumulative.sputnik[this.producer_cumulative.sputnik.length - 1] + sputnik);
        this.producer_cumulative.others.push(this.producer_cumulative.others[this.producer_cumulative.others.length - 1] + other);
    }

    clear = () => {
        this.region = '';
        this.delivery_cumulative = [0];
        this.delivery_variation = [0];
        this.producer_cumulative.pfizer = [0];
        this.producer_cumulative.astrazeneca = [0];
        this.producer_cumulative.moderna = [0];
        this.producer_cumulative.johnson = [0];
        this.producer_cumulative.sputnik = [0];
        this.producer_cumulative.others = [0];
    }
}

