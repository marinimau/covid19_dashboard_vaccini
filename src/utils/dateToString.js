/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 25/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

function replaceMonth(month){
    switch (month){
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        default:
            return '12';
    }

}

export default function dateToString(date) {
    if(date === undefined){
        return ''
    }
    // input type: 'Tue Dec 15 2020 01:00:00 GMT+0100'
    date = new Date(date).toDateString();
    const splitted = date.split(' ');
    return splitted[2] + '/' + replaceMonth(splitted[1]) + '/' + splitted[3];
}


export function dateNormalized(date) {
    date = new Date(date).toDateString();
    const splitted = date.split(' ');
    return splitted[2] + '/' + splitted[1] + '/' + splitted[3];
}
