import { Observable } from "rxjs";
import { Rival } from "./Rival";
import { Team } from "./Team";

export class Hackhaton {
    newTeam : Team;

    rivalsTeams: Rival[] = [];
    rivalsTeamsObservables: Observable<Rival[]>;

    constructor(rivalsObs: Observable<Rival[]>, newTeam: Team) {
        this.newTeam = newTeam;
        this.rivalsTeamsObservables = rivalsObs;
      }

}