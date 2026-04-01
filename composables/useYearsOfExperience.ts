const CAREER_START_YEAR = 2018;
const FALLBACK_YEARS = 8;

export function useYearsOfExperience(): number {
    const years = new Date().getFullYear() - CAREER_START_YEAR;
    return years > 0 ? years : FALLBACK_YEARS;
}
