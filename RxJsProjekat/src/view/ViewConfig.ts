import { Member } from "../models/Member";

export function drawMember(
    host : HTMLDivElement,
    member : Member,
    memberDetailsDiv : HTMLDivElement,
    memberNameLabel : HTMLLabelElement,
    memberKnowledgeLabel : HTMLLabelElement
) {
    host.appendChild(memberDetailsDiv);

    if (member) {
        memberDetailsDiv.style.background = "#ADD8E6"; //light blue shade
        memberNameLabel.innerHTML = member.name;
        memberDetailsDiv.appendChild(memberNameLabel);
        memberKnowledgeLabel.innerHTML = `Algorithms: ${member.algorithms} Back: ${member.back} Front: ${member.front} Database: ${member.database} Creativity : ${member.creativity}`;
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

  //TODO

  //drawing functions for base elements, team, and result (sort list of teams based on points)