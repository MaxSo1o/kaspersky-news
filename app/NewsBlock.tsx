import {IData_SnippetNews} from "@/app/types/types";
import s from "./NewsBlock.module.css";
import {GlobalOutlined, TranslationOutlined, UserOutlined} from "@ant-design/icons";
import {SmmInfo} from "@/app/components/SmmInfo";

interface smmInfo {

}

export const NewsBlock = (info: IData_SnippetNews) => {
    return (
        <>
            <div className={s['news-block']}>
                <SmmInfo smm={...info}/>
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