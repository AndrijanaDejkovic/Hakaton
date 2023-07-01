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

      compareTeams(rivals: Rival[]) {
        const observables = rivals.map((rival) =>
        of(rival).pipe(delay(1000))
         );

        forkJoin(observables).subscribe((data) => {
        data.forEach((rival) => {
            this.determineWinner(this.teamStrenght, rival);
        });

        console.log("ehehe" + this.placeTaken);
        drawResults(rivals, this.newTeam, this.placeTaken);
        });


      }

      startHackathon() {
        this.rivalsTeamsObservables.subscribe((rivals) => {
          this.compareTeams(rivals);
          this.placeTaken = rivals.length + 1;
        });
      }

      determineWinner(newTeamStrength: number, rival: Rival) {
        
        if (newTeamStrength > (rival.teamStrength * rival.hoursWorking)) {
            //console.log(newTeamStrength + " vs stari : " + rival.teamStrength * rival.hoursWorking );
            this.placeTaken--;
        }
      }

}