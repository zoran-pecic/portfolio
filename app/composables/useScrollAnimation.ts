import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const animatedElements = document.querySelectorAll(
            '.animate-on-scroll, .stagger-children, .stagger-fade, .slide-from-left, .slide-from-right'
        );

        animatedElements.forEach((el) => observer?.observe(el));
    });

    onUnmounted(() => {
        observer?.disconnect();
    });
}
