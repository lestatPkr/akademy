export type CompetencyScore = {
    competencyId: string;
    score: number;
};

export type PlayerStats = {
    playerId: string;
    stats: CompetencyScore[];
};