import s from "@/app/NewsBlock.module.css";

export const FormatReach = ({reach}: {reach: number}) => {
    const formatReach = (reach: number) => {
        if (reach >= 1000000) {
            return (reach / 1000000).toFixed(0) + "M";
        } else if (reach >= 1000) {
            return (reach / 1000).toFixed(0) + "K";
        } else {
            return reach;
        }
    }

    return (
        <div className={s['reach']}>
            <div className={s['text']}><span className={s['white']}>{formatReach(reach)}</span> Reach</div>
        </div>
        )
}