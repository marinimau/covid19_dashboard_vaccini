/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export const appInfo = {
    name: 'Covid19 Dashboard Vaccini',
    version: '1.0.0 beta',
    author: '@marinimau',
    description: 'Covid-19 Italy è una dashboard realizzata da Mauro Marini per il monitoraggio e la visualizzazione dei dati riguardanti la distribuzione e la somministrazione dei vaccini Covid-19 nel territorio italiano.'
};

export const uiButtons = {
    done: 'Fatto'
}

export const loadingMessages = {
    loading: 'Caricamento...',
    error: 'Qualcosa è andato storto, ricarica la pagina',
    noNotes: 'Nessuna nota in data odierna',
};

export const screenTitles = {
    home: 'Home',
    latestUpdateResume: 'Resoconto',
    delivered: 'Consegne',
    administration: 'Somministrazioni',
    info: 'Informazioni'
};


export const cardTitles = {
    delivery: 'Consegne',
    administration: 'Somministrazioni',
    administrationHealthcare: 'Personale sanitario',
    administrationAssociated: 'Personale non sanitario',
    administrationRsa: 'Pazienti delle RSA',
    administrationOver80: 'Cittadini Over80',
    administrationOther: 'Altri'
}

export const deliveryChartTitles = {
    percentageOfTotal: 'Percentuale sul totale nazionale',
    cumulativeTrend: 'Andamento vaccini consegnati (cumulativo)',
    variationTrend: 'Andamento vaccini consegnati (variazione giornaliera)',
    repartitionAbsolute: 'Ripartizione per casa farmaceutica (valore assoluto)',
    repartitionPercentage: 'Ripartizione per casa farmaceutica (valore percentuale)',
    deliveredAdministrationRatio: 'Rapporto somministrazioni / consegne'
}

export const deliveryChartDescriptions = {
    percentageOfTotal: 'percentuale di dosi consegnate nell\'area selezionata rispetto al totale nazionale',
    cumulativeTrend: 'Conteggio cumulativo delle dosi di vaccino consegnate nel corso del tempo',
    variationTrend: 'Numero giornaliero di dosi di vaccino consegnate nel corso del tempo',
    repartitionAbsolute: 'ripartizione per casa farmaceutica  delle dosi consegnate (valore assoluto)',
    repartitionPercentage: 'ripartizione per casa farmaceutica delle dosi consegnate(valore percentuale)',
    deliveredAdministrationRatio: 'Percentuale di dosi somministrate rispetto a quelle ricevute',
    producer: ['Pfizer Inc', 'Altri']
}


export const administrationChartTitles = {
    percentageOfTotal: 'Percentuale sul totale nazionale',
    cumulativeTrend: 'Andamento vaccini somministrati (cumulativo)',
    variationTrend: 'Andamento vaccini somministrati (variazione giornaliera)',
    genderRepartitionAbsolute: 'Ripartizione per genere (valore assoluto)',
    genderRepartitionPercentage: 'Ripartizione per genere (valore percentuale)',
    dosageRepartitionAbsolute: 'Ripartizione per dosaggio (valore assoluto)',
    dosageRepartitionPercentage: 'Ripartizione per dosaggio (valore percentuale)',
}

export const administrationChartDescriptions = {
    percentageOfTotal: 'percentuale di dosi consegnate nell\'area selezionata rispetto al totale nazionale',
    cumulativeTrend: 'Conteggio cumulativo delle dosi di vaccino somministrate nel corso del tempo',
    variationTrend: 'Numero giornaliero di dosi di vaccino somministrate nel corso del tempo',
    genderRepartitionAbsolute: 'Ripartizione delle dosi somministrate per genere (valore assoluto)',
    genderRepartitionPercentage: 'Ripartizione delle dosi somministrate per genere (valore percentuale)',
    gender: ['Sesso maschile', 'Sesso femminile'],
    dosageRepartitionAbsolute: 'Ripartizione delle dosi somministrate per primo o secondo dosaggio (valore assoluto)',
    dosageRepartitionPercentage: 'Ripartizione delle dosi somministrate per primo o secondo dosaggio (valore assoluto)',
    dosage: ['Prima dose', 'Seconda dose'],
}

export const chartTitles = {
    locationSelectorPlaceholder: 'Cambia regione...',
    allItaly: 'Tutta Italia',
    lastUpdateDate: 'Dati del ',
    placeholderValue: 'N/D',
    placeholderValueIncr: ' (+N/D)',
}


export const dataDescription = {
    lastUpdate: '* tutti gli incrementi sono calcolati rispetto al giorno precedente',
    showPercentage: 'Ripartizione in percentuale'
}


export const infoMenuTitles = {
    sectionLinks: 'Link utili',
    dashboard_covid: 'Covid-19 Italy',
    donate: 'Dona',
    contact: 'Contatti',
    repository: 'Repository',
    data: 'Sorgente dati',
}


export const infoMenuDescriptions = {
    dashboard_covid: 'Dashboard andamento pandemia',
    donate: 'donazione libera',
    contact: 'ricevi assistenza',
    repository: 'codice sorgente',
    data: 'Developers Italia',
}
