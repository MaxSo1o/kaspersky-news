import s from "@/app/NewsBlock.module.css";
import {FormatDate} from "@/app/components/FormatDate";
import {FormatReach} from "@/app/components/FormatReach";
import {FormatTraffic} from "@/app/components/FormatTraffic";
import {Flex} from "antd";
import {GlobalOutlined, TranslationOutlined, UserOutlined} from "@ant-design/icons";
import {IData_SnippetNews} from "@/app/types/types";

export const DuplicatesComponent = (info: IData_SnippetNews) => {
    return (
        <div className={s['news-block']}>
            <div className={s['smm-info']}>
                <FormatDate date={info.DP}/>
                <FormatReach reach={info.REACH}/>
            </div>
            <div className={s['news-title']}>
                <span className={s['title']}>{info.TI}</span>
            </div>
            <div className={s['source']}>
                <div>
                    <Flex gap={5}>
                        <GlobalOutlined />
                        <span className={s['website']} style={{textTransform: "capitalize"}}>{info.DOM}</span>
                    </Flex>
                </div>
                <div>
                    <Flex gap={5}>
                        <img src={`https://flagicons.lipis.dev/flags/1x1/${info.CNTR_CODE}.svg`} alt="flag" style={{height: "16px", width: "16px"}}/>
                        <span className={s['text']}> {info.CNTR}</span>
                    </Flex>
                </div>
                <div>
                    <Flex gap={5}>
                        <TranslationOutlined />
                        <span className={s['text']} style={{textTransform: "capitalize"}}>{info.LANG}</span>
                    </Flex>
                </div>
                <div>
                    <Flex gap={5}>
                        <UserOutlined />
                        <span className={s['text']}>Emily C., Taormina A., et al.</span>
                    </Flex>
                </div>
            </div>
        </div>
    )
}