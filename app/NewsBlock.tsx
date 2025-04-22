import s from "./NewsBlock.module.css";
import {IData_SnippetNews} from "@/app/types/types";
import {GlobalOutlined, TranslationOutlined, UserOutlined} from "@ant-design/icons";
import {FormatTraffic} from "@/app/components/FormatTraffic";
import {FormatReach} from "@/app/components/FormatReach";
import {FormatDate} from "@/app/components/FormatDate";
import {Button, Flex} from "antd";
import {Highlights} from "@/app/components/Highlights";
import {Tags} from "@/app/components/Tags";

export const NewsBlock = (info: IData_SnippetNews) => {

    return (
        <>
            <div className={s['news-block']}>
                <div className={s['smm-info']}>
                    <FormatDate date={info.DP}/>
                    <FormatReach reach={info.REACH}/>
                    <FormatTraffic traffic={info.TRAFFIC}/>
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
                            <span className={s['text']}>{info.CNTR}</span>
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
                <Highlights highlights={info.HIGHLIGHTS}/>
                <Tags tags={info.KW}/>
                <div className={s['original-source']}>
                    <Button color="default" variant="filled">Original Source</Button>
                </div>
                <div className={s['duplicates']}>
                    <div className={s['text']}>Duplicates:
                        <span className={s['white']}> 1</span>
                    </div>

                </div>
            </div>
        </>
    );
};