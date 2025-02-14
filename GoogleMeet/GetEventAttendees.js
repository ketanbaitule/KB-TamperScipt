// ==UserScript==
// @name         Google Meet Participation Info
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/*
// @exclude      https://meet.google.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

function get_participant_list(){
    let participants = document.querySelector("div[aria-label='Participants']");
    let participant_list = [];
    for(let i=0; i < participants.children.length; i++){
        let participant = participants.children[i].querySelector("div[avatar-tooltip-id]");
        let name = get_participant_name(participant);
        participant_list.push(name);
    }
    return participant_list;
}

function get_participant_name(participant){
    let participant_name = participant.children[1].children[0].innerText;
    return participant_name;
}

function create_csv(){
	let time1=new Date().getHours()+":"+new Date().getMinutes();
	let t1=get_participant_list();
	t1[0]=t1[0].replace("\n(You)", "");
  console.log([...new Set(t1)].join("\t"+time1+"\n")+"\t"+time1)
}
