import "./SecondHomeSlideFooter.css";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";

function GitHubStats() {
    const [ref, inView] = useInView({threshold: 1, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div ref={ref} className={`mt-5 github-stats ${(inView || isMobile ? "animate" : "no-animate")}`}>
            <a href="https://github.com/anuraghazra/github-readme-stats#gh-light-mode-only"><img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=alessiomason&langs_count=10&layout=compact&theme=transparent&hide_border=true&title_color=ffd500&text_color=ffd500#gh-light-mode-only"/>
            </a>
        </div>
    );
}

export default GitHubStats;