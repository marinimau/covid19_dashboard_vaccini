/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 30/01/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */


export function calculateDifferenceInDaysFromString(date1,date2){
    const diffTime = Math.abs(date1 - date2);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function daysFromDay0() {
    return calculateDifferenceInDaysFromString(new Date('2020-12-15T00:00:00'), Date.now());
}

export function compareDateUsingDaysFromDay0(daysFromStart, dateString) {
    const diffFromStart = calculateDifferenceInDaysFromString(new Date('2020-12-15T00:00:00'), new Date(dateString));
    return daysFromStart === diffFromStart;
}