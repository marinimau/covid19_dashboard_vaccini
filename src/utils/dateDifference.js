/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */


export function calculateDifferenceInDaysFromString(dateString){
    let date = Date(dateString);
    return Math.round(Math.abs(date - Date.now()) / (1000*60*60*24));
}