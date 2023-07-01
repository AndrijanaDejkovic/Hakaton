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
  
  let midDiv: HTMLDivElement;
  
  let positionDivs: HTMLDivElement[] = [];
  let classNames: string[] = [
    "gkDiv",
    "defDiv",
    "leftMidDiv",
    "rightMidDiv",
    "attDiv",
  ];
  
  createElements(
    inputFields,
    memberDivs,
    memberDetails,
    memberNameLabels,
    memberKnowledgeLabels,
    teamViewContainer,
    midDiv,
    positionDivs,
    classNames
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
  