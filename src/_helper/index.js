import {UNIQUE_TOURNAMENT_LIST, INCIDENT_TYPE, INCIDENT_CLASS, INCIDENT_REASON, ORTHER_TEXT} from '@/_constants'

const uniqueTournamentData = UNIQUE_TOURNAMENT_LIST

function uniqueTounamentData (){ 
    var data =[];
    for(let tournament of uniqueTournamentData.uniqueTournaments){
        data[tournament.id] = tournament;
    }
    return data;
}

export function getTournament(id){
    let data = uniqueTounamentData();
    return data[id];
}

export function getImgUrl (){
   return new URL('@/assets', import.meta.url).href;
}

export function getStatusString(code, description){
    switch (code){
        case 100: 
            return "Đã kết thúc";
        case 6:    
            return "Đang diễn ra - H1";
        case 0:    
            return "Sắp diễn ra";
        default:
            return description;
    }

}

export function timestamptoDateTime(timestamp){
    let date = new Date(timestamp*1000)

    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if(!this.$isMobile()){
        return dd + '/' + mm + '/' + yyyy + " " + date.toLocaleTimeString();
    }else{
        return date.toLocaleTimeString();
    }

    
}

export function getSub(type, key){
    switch(type){
        case "INCIDENT_TYPE":
            return INCIDENT_TYPE[key] ?? key;
        case "INCIDENT_CLASS":
            return INCIDENT_CLASS[key] ?? key;
        case "INCIDENT_REASON":
            return INCIDENT_REASON[key] ?? key;
        case "OTHER_TEXT":
            return ORTHER_TEXT[key] ?? key;
        default:
            return key;
    }
}