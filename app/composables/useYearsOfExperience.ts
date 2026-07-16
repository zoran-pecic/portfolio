// Keep in sync with the copy in nuxt.config.ts meta descriptions
const CAREER_START_YEAR = 2017;
const FALLBACK_YEARS = 9;

export function useYearsOfExperience(): number {
    const years = new Date().getFullYear() - CAREER_START_YEAR;
    return years > 0 ? years : FALLBACK_YEARS;
}
