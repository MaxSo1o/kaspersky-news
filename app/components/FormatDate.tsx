import s from "@/app/NewsBlock.module.css";

export const FormatDate = ({date}: {date: string}) => {
    const formatDate = (date: string) => {
        const d = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return (
            <div className={s['text']}><span className={s['white']}>{day}</span> {month} {year}</div>
        )
    }

    return (
        <div className={s['date']}>
            <span className={s['text']}>{formatDate(date)}</span>
        </div>
        )
}