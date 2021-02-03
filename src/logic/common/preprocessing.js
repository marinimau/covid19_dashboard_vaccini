/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 01/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

function getIndex(area) {
    let areas = ['ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR', 'MOL', 'PAB', 'PAT', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'UMB', 'VDA', 'VEN']
    return areas.indexOf(area);
}

export default function divideByRegion(data){
    let dataToReturn = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    let index = 0, i;
    // scroll al records (there are records with different areas at the same level)
    // ex (a = area): [{a1, 1}, ... {a1, n}, ... {ak, 1}, ... {ak, n}, {a1, n+1}, ... {a1, n+x}, ...]
    // i.e. it's not granted that there are all regions at each round
    for(i = 0; i < data.length; i++){
        index = getIndex(data[i]["area"]);
        if(index !== -1){
            dataToReturn[index].push(data[i]);
        }
    }
    return dataToReturn.length === 21 ? dataToReturn : [];
}