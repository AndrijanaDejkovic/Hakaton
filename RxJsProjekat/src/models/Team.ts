import { Member } from "./Member";

export class Team{
    members : Member[];
    teamName : string;
    hoursWorking : number;

    constructor(members : Member[], teamName : string) {
        this.members = members;
        this.teamName = teamName;
    }

    getTeamStrength() : number {
        let strength : number = 0.0;
        this.members.forEach((member) => {
            strength+=member.algorithms + member.front + member.back + member.creativity + member.database;
        });
        this.hoursWorking = Math.random() * 24;


        return strength / this.members.length * this.hoursWorking;
    }
}