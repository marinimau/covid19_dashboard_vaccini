/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React from "react";
import {screenTitles} from "../contents/strings";
import DeliveryComponent from "../components/delivery/deliveryComponent";
import ScreenContainer from "../components/screenContainer";

function DeliveryScreen({ navigation }) {

    return (
        <ScreenContainer title={screenTitles.delivered} component={<DeliveryComponent/>} />
    );
}

export default DeliveryScreen;