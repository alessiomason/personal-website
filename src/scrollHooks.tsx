import {useState, useEffect, RefObject} from "react";

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollPosition = () => {
            const currentScrollY = window.pageYOffset;

            setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
            setScrollY(currentScrollY);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollPosition, {passive: true});

        return () => {
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, []);

    return {scrollY, scrollDirection};
};

// Hook per calcolare il progresso di scroll di un elemento.
export const useScrollProgress = (elementRef: RefObject<HTMLElement | null>) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            if (!elementRef.current) return;

            const element = elementRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calcola il progresso basato sulla posizione dell'elemento
            const elementTop = rect.top;
            const elementHeight = rect.height;

            if (elementTop > windowHeight) {
                setProgress(0);
            } else if (elementTop + elementHeight < 0) {
                setProgress(1);
            } else {
                const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
                const progressValue = elementHeight === 0 ? 0 : Math.max(0, visibleHeight / elementHeight);
                setProgress(progressValue);
            }
        };

        window.addEventListener("scroll", updateProgress, {passive: true});
        updateProgress(); // Calcola il progresso iniziale

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, [elementRef]);

    return progress;
};