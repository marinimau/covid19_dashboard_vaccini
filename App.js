/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import Async from 'react-async';
import Records from "./src/logic/dataset";
import {enableScreens} from 'react-native-screens';
import ErrorScreen from "./src/ui/components/loading/error";
import LoadingComponent from "./src/ui/components/loading/loading";
import GlobalContainer from "./src/ui/components/GlobalContainer";
import {retrieveAdministrationData, retrieveDeliveryData} from "./src/logic/retrieve";


enableScreens();

export default function App() {

    return (
        <Async promiseFn={retrieveAdministrationData}>
            {({data, err, isLoading}) => {
                if (isLoading) return <LoadingComponent/>
                if (err) return <ErrorScreen/>
                if (data) Records.setAdministrationRecords(data)

                return (
                    <Async promiseFn={retrieveDeliveryData}>
                        {({data, err, isLoading}) => {
                            if (isLoading) return <LoadingComponent/>
                            if (err) return <ErrorScreen/>
                            if (data) Records.setDeliveryRecords(data)

                            return (
                                <GlobalContainer />
                            )
                        }}
                    </Async>
                )
            }}
        </Async>
    );
}









