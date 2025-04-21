import s from "@/app/NewsBlock.module.css";

export const SmmInfo = (props) => {
    return(
        <div className={s['smm-info']}>
            <div className={s['date']}>
                <span className={s['text']}>{props}</span>
            </div>
            <div className={s['reach']}>
                <span className={s['text']}>211K Reach</span>
            </div>
            <div className={s['traffic']}>
                <span className={s['text']}>Top Traffic:</span> <span className={s['text']}>Australia 38%</span>
            </div>
        </div>
    )
}