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
    pfizer_cumulative = [0]

    setRegion = (region) => {
        this.region = region;
    }

    addCumulative = (item) => {
        this.delivery_cumulative.push(this.delivery_cumulative[this.delivery_cumulative.length -1] + item);
    }

    addVariation = (item) => {
        this.delivery_variation.push(item);
    }

    addPfizerCumulative = (item) =>{
        this.pfizer_cumulative.push(this.pfizer_cumulative[this.pfizer_cumulative.length - 1] + item);
    }

    clear = () => {
        this.region = '';
        this.delivery_cumulative = [];
        this.delivery_variation = [];
        this.pfizer_cumulative = [];
    }
}

