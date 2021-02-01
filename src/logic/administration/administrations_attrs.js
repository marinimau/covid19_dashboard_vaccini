/**
 * covid19_dashboard_vaccini copyright © 2021
 * Created by mauromarini on 01/02/21
 * Repository: http://github.com/marinimau/covid19_dashboard_vaccini
 * Location: Baratili San Pietro
 */

export default class AdministrationsAttrs {
    region = '';
    administration_cumulative = [0];
    administration_variation = [0];
    administration_gender_cumulative = {
        male: [0],
        female: [0]
    }
    administration_dosage = {
        first: [0],
        second: [0]
    }
    administration_categories_cumulative = {
        healthcare_personnel : [0],
        associated_healthcare_personnel : [0],
        rsa_patients: [0],
        over_80: [0],
        other: [0],
    }

    setRegion = (region) => {
        this.region = region;
    }

    addCumulative = (item) => {
        this.administration_cumulative.push(this.administration_cumulative[this.administration_cumulative.length - 1] + item);
    }

    addVariation = (item) => {
        this.administration_variation.push(item);
    }

    addGenderCumulative = (male, female) =>{
        this.administration_gender_cumulative.male.push(this.administration_gender_cumulative.male[this.administration_gender_cumulative.male.length - 1] + male);
        this.administration_gender_cumulative.female.push(this.administration_gender_cumulative.female[this.administration_gender_cumulative.female.length - 1] + female);
    }

    addCategoriesCumulative = (healthcare_personnel, associated_healthcare_personnel, rsa_patients, over_80, other) => {
        this.administration_categories_cumulative.healthcare_personnel.push(this.administration_categories_cumulative.healthcare_personnel[this.administration_categories_cumulative.healthcare_personnel.length - 1] + healthcare_personnel);
        this.administration_categories_cumulative.associated_healthcare_personnel.push(this.administration_categories_cumulative.associated_healthcare_personnel[this.administration_categories_cumulative.associated_healthcare_personnel.length - 1] + associated_healthcare_personnel);
        this.administration_categories_cumulative.rsa_patients.push(this.administration_categories_cumulative.rsa_patients[this.administration_categories_cumulative.rsa_patients.length - 1] + rsa_patients);
        this.administration_categories_cumulative.over_80.push(this.administration_categories_cumulative.over_80[this.administration_categories_cumulative.over_80.length - 1] + over_80);
        this.administration_categories_cumulative.other.push(this.administration_categories_cumulative.other[this.administration_categories_cumulative.other.length - 1] + other);
    }

    clear = () => {
        this.region = '';
        this.administration_cumulative = [0];
        this.administration_variation = [0];
        this.administration_gender_cumulative.male = [0];
        this.administration_gender_cumulative.female = [0];
        this.administration_categories_cumulative.healthcare_personnel = [0];
        this.administration_categories_cumulative.associated_healthcare_personnel = [0];
        this.administration_categories_cumulative.rsa_patients = [0];
        this.administration_categories_cumulative.over_80 = [0];
        this.administration_categories_cumulative.other = [0];
    }
}