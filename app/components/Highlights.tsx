import s from "@/app/NewsBlock.module.css";

export const TagsHighlights = ({highlights}: {highlights: string}) => {
    const parts = highlights.split(/(<kw>.*?<\/kw>)/g);

    return (
        <span>
            {parts.map((part: string, index: number) => {
                if (part.startsWith("<kw>") && part.endsWith("</kw>")) {
                    const keyword = part.replace(/<\/?kw>/g, "");
                    return (
                        <span key={index} className={s['highlight']}>{keyword}</span>
                    )
                }
                return <span key={index}>{part}</span>;
            })}
        </span>
    )
};

export const Highlights = ({highlights}: {highlights: string[]}) => {
    return (
        <div className={s['highlights']}>
            {highlights.map((highlight, index) => (
                <TagsHighlights highlights={highlight} key={index} />
            ))}
        </div>
    )
}