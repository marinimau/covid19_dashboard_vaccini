/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {TouchableOpacity} from "react-native";
import MainScrollableContents from "../mainScrollableContainer";
import CardDelivery from "../../../data_representation/resume_cards/cardDelivery";
import CardAdministration from "../../../data_representation/resume_cards/cardAdministration";
import {navigate} from "../../../utils/rootNavigationRef";
import {screenTitles} from "../../contents/strings";
import CardDate from "../../../data_representation/resume_cards/cardDate";

class LatestUpdateComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <MainScrollableContents>

                <>
                    <TouchableOpacity onPress={() => {
                        navigate(screenTitles.delivered);
                    }}>
                        <CardDelivery/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigate(screenTitles.administration);
                    }}>
                        <CardAdministration/>
                    </TouchableOpacity>

                    <CardDate/>
                </>

            </MainScrollableContents>
        )
    }
}

export default LatestUpdateComponent;
