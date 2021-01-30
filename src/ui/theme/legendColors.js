/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import darkMode from "./darkModeDetector";

let LegendColors = {
    green: darkMode() ? '#30d158' : '#34c759',
    red: darkMode() ? '#ff453a' : '#ff3a30',
    orange: darkMode() ?'#ff9f0a' :  '#ff9500',
    yellow: darkMode() ? '#ffd60a' : '#ffcc00',
    grey: darkMode() ? '#767676' : '#616161',
    blue: darkMode() ? '#0a84ff' : '#007bff',
    indigo: darkMode() ? '#5e5ce6' : '#5856d6',
    teal: darkMode() ? '#64d3ff' : '#5ac8fa',
    pink: darkMode() ? '#ff375f' : '#ff2d55',
    purple: darkMode() ? '#bf5af2' : '#af52de',
    neutral: darkMode() ? '#505050' : '#000000',
}

export default LegendColors;