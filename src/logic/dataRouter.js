/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 09/09/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import NewCasesData from "./newCasesData";
import {cleanData as cleanNewCases} from "./newCasesData";
import {cleanData as cleanPositiveDelta} from "./positiveDeltaData";



let DataRouter = {
    NewCasesData: () => {return NewCasesData()},

    refreshData(){
        this.NewCasesData = NewCasesData()
    },

    cleanData(){
        cleanNewCases();
        cleanPositiveDelta();
    }
}

export default DataRouter;