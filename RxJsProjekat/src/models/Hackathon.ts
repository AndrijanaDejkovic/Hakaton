import { Observable, concatMap, delay, forkJoin, from, of } from "rxjs";
import { Rival } from "./Rival";
import { Team } from "./Team";
import { drawResults } from "../view/ViewConfig";

export class Hackhaton {
    newTeam : Team;
    placeTaken : number;
    teamStrenght : number;

    rivalsTeams: Rival[] = [];
    rivalsTeamsObservables: Observable<Rival[]>;

    constructor(rivalsObs: Observable<Rival[]>, newTeam: Team) {
        this.newTeam = newTeam;
        this.rivalsTeamsObservables = rivalsObs;
        this.teamStrenght = newTeam.getTeamStrength();
      }

      findTeamPosition(rivals: Rival[]) {
        const observables = rivals.map((rival) =>
            of(rival).pipe(delay(1000))
        );

        forkJoin(observables).subscribe((data) => {
        data.forEach((rival) => {
            this.compareTwoTeams(this.teamStrenght, rival);
        });

        drawResults(rivals, this.newTeam, this.placeTaken);
        });
      }

      startHackathon() {
        this.rivalsTeamsObservables.subscribe((rivals) => {
          this.findTeamPosition(rivals);
          this.placeTaken = rivals.length + 1;
        });
      }

      compareTwoTeams(newTeamStrength: number, rival: Rival) {
        
        if (newTeamStrength > (rival.teamStrength * rival.hoursWorking)) {
            this.placeTaken--;
        }
      }

}