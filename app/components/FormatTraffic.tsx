import s from "@/app/NewsBlock.module.css";
import {IData_TrafficItem} from "@/app/types/types";

export const FormatTraffic = ({traffic} : {traffic: IData_TrafficItem[]}) => {
    const format = traffic
        .map(info => ({
            country: info.value,
            percent: Math.round(info.count * 100)
        }))
        .sort((a, b) => b.percent - a.percent)

    return (
        <div className={s['traffic']}>
            <span className={s['text']}>Top Traffic:</span>
            {format.map((item, index) => (
                <div className={s['text']} key={index}>{item.country} <span className={s['white']}>{item.percent}%</span></div>
            ))}
        </div>
    )
}