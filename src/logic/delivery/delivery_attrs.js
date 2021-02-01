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

    addPfizerCumulative = (pfizer, other) =>{
        this.producer_cumulative.pfizer.push(this.producer_cumulative.pfizer[this.producer_cumulative.pfizer.length - 1] + pfizer);
        this.producer_cumulative.others.push(this.producer_cumulative.others[this.producer_cumulative.others.length - 1] + other);
    }

    clear = () => {
        this.region = '';
        this.delivery_cumulative = [0];
        this.delivery_variation = [0];
        this.producer_cumulative.pfizer = [0];
        this.producer_cumulative.others = [0];
    }
}

