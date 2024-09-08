
export type TainingModelStatsObjective = {
    competencyId: string;
    position: string;
    expectedScore: number;
};

export class TainingModelStatsObjectives {
    constructor(
        public id: string,
        public objectives: TainingModelStatsObjective[]
    ) { }
}