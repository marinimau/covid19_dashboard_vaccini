/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 25/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export default function dateToString(date) {
    if(date === undefined){
        return ''
    }
    // input type: 'Tue Dec 15 2020 01:00:00 GMT+0100'
    date = new Date(date).toDateString();
    const splitted = date.split(' ');
    return splitted[2] + '/' + splitted[1] + '/' + splitted[3];
}

