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
        second: [0],
        third: [0],
        booster: [0]
    }
    administration_categories_cumulative = {
        healthcare_personnel: [0],
        associated_healthcare_personnel: [0],
        rsa_patients: [0],
        over_80: [0],
        other: [0],
    }
    administration_age_cumulative = {
        over_90: [0],
        f80_89: [0],
        f70_79: [0],
        f60_69: [0],
        f50_59: [0],
        f40_49: [0],
        f30_39: [0],
        f20_29: [0],
        f16_19: [0],
        under16: [0]
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

    addGenderCumulative = (male, female) => {
        this.administration_gender_cumulative.male.push(this.administration_gender_cumulative.male[this.administration_gender_cumulative.male.length - 1] + male);
        this.administration_gender_cumulative.female.push(this.administration_gender_cumulative.female[this.administration_gender_cumulative.female.length - 1] + female);
    }

    addDosageCumulative = (first, second, third, booster) => {
        this.administration_dosage.first.push(this.administration_dosage.first[this.administration_dosage.first.length - 1] + first);
        this.administration_dosage.second.push(this.administration_dosage.second[this.administration_dosage.second.length - 1] + second);
        this.administration_dosage.third.push(this.administration_dosage.third[this.administration_dosage.third.length - 1] + third);
        this.administration_dosage.booster.push(this.administration_dosage.booster[this.administration_dosage.booster.length - 1] + booster);
    }

    addCategoriesCumulative = (healthcare_personnel, associated_healthcare_personnel, rsa_patients, over_80, other) => {
        this.administration_categories_cumulative.healthcare_personnel.push(this.administration_categories_cumulative.healthcare_personnel[this.administration_categories_cumulative.healthcare_personnel.length - 1] + healthcare_personnel);
        this.administration_categories_cumulative.associated_healthcare_personnel.push(this.administration_categories_cumulative.associated_healthcare_personnel[this.administration_categories_cumulative.associated_healthcare_personnel.length - 1] + associated_healthcare_personnel);
        this.administration_categories_cumulative.rsa_patients.push(this.administration_categories_cumulative.rsa_patients[this.administration_categories_cumulative.rsa_patients.length - 1] + rsa_patients);
        this.administration_categories_cumulative.over_80.push(this.administration_categories_cumulative.over_80[this.administration_categories_cumulative.over_80.length - 1] + over_80);
        this.administration_categories_cumulative.other.push(this.administration_categories_cumulative.other[this.administration_categories_cumulative.other.length - 1] + other);
    }

    addAgeRepartitionCumulative = (over90, f80_89, f70_79, f60_69, f50_59, f40_49, f30_39, f20_29, f16_19, under16) => {
        let idx = this.administration_age_cumulative.under16.length -1
        this.administration_age_cumulative.under16.push(this.administration_age_cumulative.under16[idx] + under16);
        this.administration_age_cumulative.f16_19.push(this.administration_age_cumulative.under16[idx] + f16_19);
        this.administration_age_cumulative.f20_29.push(this.administration_age_cumulative.under16[idx] + f20_29);
        this.administration_age_cumulative.f30_39.push(this.administration_age_cumulative.under16[idx] + f30_39);
        this.administration_age_cumulative.f40_49.push(this.administration_age_cumulative.under16[idx] + f40_49);
        this.administration_age_cumulative.f50_59.push(this.administration_age_cumulative.under16[idx] + f50_59);
        this.administration_age_cumulative.f60_69.push(this.administration_age_cumulative.under16[idx] + f60_69);
        this.administration_age_cumulative.f70_79.push(this.administration_age_cumulative.under16[idx] + f70_79);
        this.administration_age_cumulative.f80_89.push(this.administration_age_cumulative.under16[idx] + f80_89);
        this.administration_age_cumulative.over_90.push(this.administration_age_cumulative.under16[idx] + over90);
    }

    clear = () => {
        this.region = '';
        this.administration_cumulative = [0];
        this.administration_variation = [0];
        this.administration_gender_cumulative.male = [0];
        this.administration_gender_cumulative.female = [0];
        this.administration_dosage.first = [0];
        this.administration_dosage.second = [0];
        this.administration_dosage.third = [0];
        this.administration_dosage.booster = [0];
        this.administration_categories_cumulative.healthcare_personnel = [0];
        this.administration_categories_cumulative.associated_healthcare_personnel = [0];
        this.administration_categories_cumulative.rsa_patients = [0];
        this.administration_categories_cumulative.over_80 = [0];
        this.administration_categories_cumulative.other = [0];
        this.administration_age_cumulative.under16 = [0];
        this.administration_age_cumulative.f16_19 = [0];
        this.administration_age_cumulative.f20_29 = [0];
        this.administration_age_cumulative.f30_39 = [0];
        this.administration_age_cumulative.f40_49 = [0];
        this.administration_age_cumulative.f50_59 = [0];
        this.administration_age_cumulative.f60_69 = [0];
        this.administration_age_cumulative.f70_79 = [0];
        this.administration_age_cumulative.f80_89 = [0];
        this.administration_age_cumulative.over_90 = [0];
    }
}