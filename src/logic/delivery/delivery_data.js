/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

export default class DeliveryData {
    regions = [];

    pushToRegion = (item) => {
        this.regions.push(item);
    }
}