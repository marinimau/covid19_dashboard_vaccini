/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from "react";
import {screenTitles} from "../contents/strings";
import ScreenContainer from "../components/screenContainer";
import AdministrationComponent from "../components/administration/administrationComponent";



function AdministrationScreen({ navigation }) {

    return (
        <ScreenContainer title={screenTitles.administration} component={<AdministrationComponent/>} />
    );
}

export default AdministrationScreen;
