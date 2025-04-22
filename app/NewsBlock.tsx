import {IData_SnippetNews} from "@/app/types/types";
import s from "./NewsBlock.module.css";
import {GlobalOutlined, TranslationOutlined, UserOutlined} from "@ant-design/icons";

export const NewsBlock = (info: IData_SnippetNews) => {

    const formatDate = (date: string) => {
        const d = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return `${day} ${month} ${year}`;
    }

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
        <>
            <div className={s['news-block']}>
                <div className={s['smm-info']}>
                    <div className={s['date']}>
                        <span className={s['text']}>{formatDate(info.DP)}</span>
                    </div>
                    <div className={s['reach']}>
                        <span className={s['text']}>{formatReach(info.REACH)} Reach</span>
                    </div>
                    <div className={s['traffic']}>
                        <span className={s['text']}>Top Traffic:</span> <span className={s['text']}>Australia 38%</span>
                    </div>
                </div>
                <div className={s['news-title']}>
                    <span className={s['title']}>{info.TI}</span>
                </div>
                <div className={s['source']}>
                    <div>
                        <GlobalOutlined />
                        <span className={s['website']}>globalsecuritymag.com</span>
                    </div>
                    <div>
                        <span className={s['text']}>Australia</span>
                    </div>
                    <div>
                        <TranslationOutlined />
                        <span className={s['text']}>En</span>
                    </div>
                    <div>
                        <UserOutlined />
                        <span className={s['text']}>Emily C., Taormina A., et al.</span>
                    </div>
                </div>
                <div className={s['tags-in-text']}>

                </div>
                <div className={s['tags']}>
                    <div className={s['tag']}>
                        <span className={s['text']}>antivirus</span>
                    </div>
                </div>
                <div className={s['original-source']}>
                    <button className={s['button']}>Original Source</button>
                </div>
            </div>
        </>
    );
};