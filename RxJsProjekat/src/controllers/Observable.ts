import { Observable, auditTime, combineLatest, debounceTime, filter, from, fromEvent, map, switchMap, takeUntil } from "rxjs";
import { Member } from "../models/Member";
import { environment } from "../environment";
import { drawMember } from "../view/ViewConfig";
import { Team } from "../models/Team";

export function memberInputObservable(
    inputField: HTMLInputElement,
    memberContainer: HTMLDivElement
)
{
        return fromEvent(inputField, "input").pipe(
          debounceTime(500),
          map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
          filter((teamMemberName) => teamMemberName.length >= 3),
          switchMap((teamMemberName) =>
            fetchMember(teamMemberName, memberContainer)
          ),
          map((data) => data[0])
        );
}

function fetchMember(
    memberName: string,
    memberContainer: HTMLDivElement
  ): Observable<Member[]> {
    return from(
      fetch(`${environment.BASE_URL}/people/?name=${memberName}`)
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
          else {
            throw new Error("Man/woman with inserted name doesn't exist");
          }
        })
        .catch((err) => (memberContainer.innerHTML = "Team member not found"))
    );
  }


export function teamNameInputObservable(
    inputField: HTMLInputElement
  ): Observable<string> {
    return fromEvent(inputField, 'input').pipe(
      debounceTime(500),
      map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
      filter((teamName) => teamName.length >= 3),
      auditTime(2000) // Add a delay of 2 seconds after user stops writing
    );
  }

  export function makeTeamObservable(
    inputFields: HTMLInputElement[],
    memberDivs: HTMLDivElement[],
    memberDetails: HTMLDivElement[],
    memberNameLabels: HTMLLabelElement[],
    memberKnowledges : HTMLLabelElement[]
  ){
    const firstMemberObservable = memberInputObservable(inputFields[0], memberDivs[0]);

    firstMemberObservable.subscribe((member : Member) =>
        drawMember(
            memberDivs[0],
            member,
            memberDetails[0],
            memberNameLabels[0],
            memberKnowledges[0]
        )
    );

    const secondMemberObservable = memberInputObservable(inputFields[1], memberDivs[1]);

    secondMemberObservable.subscribe((member : Member) =>
        drawMember(
            memberDivs[1],
            member,
            memberDetails[1],
            memberNameLabels[1],
            memberKnowledges[1]
        )  
    );

    const thirdMemberObservable = memberInputObservable(inputFields[2], memberDivs[2]);

    thirdMemberObservable.subscribe((member : Member) =>
        drawMember(
            memberDivs[2],
            member,
            memberDetails[2],
            memberNameLabels[2],
            memberKnowledges[2]
        )  
    );

    const fourthMemberObservable = memberInputObservable(inputFields[3], memberDivs[3]);

    fourthMemberObservable.subscribe((member : Member) =>
        drawMember(
            memberDivs[3],
            member,
            memberDetails[3],
            memberNameLabels[3],
            memberKnowledges[3]
        )  
    );

    let teamName = "";

    const teamNameObservable = teamNameInputObservable(inputFields[4]).subscribe((value) => {
        teamName = value;
      });
 
    combineLatest([
        firstMemberObservable,
        secondMemberObservable,
        thirdMemberObservable,
        fourthMemberObservable,
      ]).subscribe(([first, second, third, fourth]) => {
        if (first && second && third && fourth) {
          let team = new Team([first, second, third, fourth], teamName);
            //code for competition (just sort elements)
        } else {
          console.log("wrong input");
        }
      });
  }