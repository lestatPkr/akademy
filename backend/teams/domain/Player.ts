import { Entity } from "@/backend/shared/domain/Entity";

export class Player extends Entity {
    constructor(
        public playerId: number,
        public teamName: string,
        public nickname: string,
        public firstname: string,
        public lastname: string,
        public gender: 'male' | 'female',
        public birthDate: string,
        public country: string,
        public shirtNumber: number,
        public position: string,
        public dni: number,
        public parent1Name: string,
        public parent1Phone: number,
        public parent1Email: string,
        public parent2Name: string,
        public parent2Phone: number,
        public parent2Email: string,
        public photo: string,
        public teamId: string
    ) {
        super();
    }
}