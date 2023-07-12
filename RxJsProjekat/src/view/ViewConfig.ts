import { Member } from "../models/Member";
import { Rival } from "../models/Rival";
import { Team } from "../models/Team";

export function drawMember(
    host : HTMLDivElement,
    member : Member,
    memberDetailsDiv : HTMLDivElement,
    memberNameLabel : HTMLLabelElement,
    memberKnowledgeLabel : HTMLLabelElement
) {

  console.log("Draw member is called");

    document.body.appendChild(host);
    host.appendChild(memberDetailsDiv);
    memberDetailsDiv.style.background = "yellow"; 

    if (member) {
        memberDetailsDiv.style.background = "#ADD8E6"; 
        memberDetailsDiv.style.border = "solid black 1px"
        memberNameLabel.innerHTML = member.name;
        memberDetailsDiv.appendChild(memberNameLabel);
        memberKnowledgeLabel.innerHTML = ` : Algorithms: ${member.algorithms} Back: ${member.back} Front: ${member.front} Database: ${member.database} Creativity : ${member.creativity}`;
        memberDetailsDiv.append(memberKnowledgeLabel);
    }
    else {
        memberDetailsDiv.style.background = "red"; 
        memberNameLabel.innerHTML = "Man/woman not found";
        memberDetailsDiv.appendChild(memberNameLabel);

    }

   
}

function drawInputs(host: HTMLElement, inputs: HTMLInputElement[]) {
    const inputsContainer: HTMLDivElement = document.createElement("div");
    inputsContainer.classList.add("inputsDiv");
    host.appendChild(inputsContainer);
    const labelValues = [
      "Memer 1",
      "Member 2",
      "Member 3",
      "Member 4",
      "Team Name",
    ];
  
    inputs.forEach((inputField, index) => {
      const inputAndLabelDiv: HTMLDivElement = document.createElement("div");
      inputAndLabelDiv.classList.add("inputAndLabelDiv");
      inputsContainer.appendChild(inputAndLabelDiv);
  
      const inputLabel: HTMLLabelElement = document.createElement("label");
      inputLabel.innerHTML = labelValues[index];
      inputAndLabelDiv.appendChild(inputLabel);
  
      inputAndLabelDiv.appendChild(inputField);
    });
  }

  export function drawResults(
    rivals: Rival[],
    newTeam: Team,
    placeTaken: number
  ) {
    const host = document.querySelector(".resultsDiv");
    const resultLabel = document.createElement("label");
    host.appendChild(resultLabel);

    console.log(placeTaken);

    switch (placeTaken) {
      case 1:
        resultLabel.style.backgroundColor = "gold";
        break;
      case 2:
        resultLabel.style.backgroundColor = "silver";
        break;
      case 3:
        resultLabel.style.backgroundColor = "brown";
        break;
      default:
        resultLabel.style.backgroundColor = "green";
    }

    resultLabel.style.display = "block";
    rivals.sort((a, b) => (b.teamStrength * b.hoursWorking) - (a.teamStrength * a.hoursWorking));
    rivals.forEach(rival =>{
        const nameLabel = document.createElement("label");
        nameLabel.innerHTML = `${rival.name} : ${rival.teamStrength * rival.hoursWorking}`;
        nameLabel.style.display = "block";
        host.appendChild(nameLabel);
    }
    );
       
    resultLabel.innerHTML = `${newTeam.teamName} has taken ${placeTaken}. place and point : ${newTeam.getTeamStrength()}`;
  }

  export function drawTeamCreator(
    host: HTMLElement,
    teamViewContainer: HTMLDivElement,
    inputs: HTMLInputElement[]
  ) {
    const teamCreatorContainer: HTMLDivElement = document.createElement("div");
    teamCreatorContainer.classList.add("teamCreatorDiv");
    host.appendChild(teamCreatorContainer);
  
    drawInputs(teamCreatorContainer, inputs);
  
    teamViewContainer.classList.add("teamViewDiv");
    teamCreatorContainer.appendChild(teamViewContainer);
  }


  export function createElements(
    inputFields: HTMLInputElement[],
    memberDivs : HTMLDivElement[],
    memberDetails: HTMLDivElement[],
    memberNameLabels: HTMLLabelElement[],
    memberKnowledgeLebels: HTMLLabelElement[],
    teamViewContainer: HTMLDivElement,
    midDiv: HTMLDivElement,
    positionDivs: HTMLDivElement[],
    classNames: string[]
  ) {
    for (let i = 0; i < 5; ++i) {
      inputFields[i] = document.createElement("input");
      memberDetails[i] = document.createElement("div");
      memberDivs[i] = document.createElement("div");
      memberDetails[i].classList.add("memberDetails");
      memberNameLabels[i] = document.createElement("label");
      memberKnowledgeLebels[i] = document.createElement("label");
    }
  
  }
  
