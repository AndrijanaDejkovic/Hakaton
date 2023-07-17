import {
    createElements,
    drawResults,
    drawTeamCreator,
  } from "./view/ViewConfig";
  import { makeTeamObservable } from "./controllers/Observable";
  
  
  let inputFields: HTMLInputElement[] = [];
  let memberDivs: HTMLDivElement[] = [];
  let memberDetails: HTMLDivElement[] = [];
  let memberNameLabels: HTMLLabelElement[] = [];
  let memberKnowledgeLabels: HTMLLabelElement[] = [];
  
  let teamViewContainer: HTMLDivElement = document.createElement("div");
    
  //console.log(process.env.BASE_URL)

  createElements(
    inputFields,
    memberDivs,
    memberDetails,
    memberNameLabels,
    memberKnowledgeLabels
  );
  
  drawTeamCreator(document.body, teamViewContainer, inputFields);
  makeTeamObservable(
    inputFields,
    memberDivs,
    memberDetails,
    memberNameLabels,
    memberKnowledgeLabels
  );
  
  const resultsDiv = document.createElement("div");
  resultsDiv.classList.add("resultsDiv");
  document.body.appendChild(resultsDiv);
  