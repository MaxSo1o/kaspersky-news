import s from "./NewsBlock.module.css";
import {Button, Flex} from "antd";
import {IData_SnippetNews} from "@/app/types/types";
import {DownOutlined, GlobalOutlined, TranslationOutlined, UserOutlined} from "@ant-design/icons";
import {FormatTraffic} from "@/app/components/FormatTraffic";
import {FormatReach} from "@/app/components/FormatReach";
import {FormatDate} from "@/app/components/FormatDate";
import {Highlights} from "@/app/components/Highlights";
import {Tags} from "@/app/components/Tags";
import {SortingDuplicates} from "@/app/components/SortingDuplicates";
import {Duplicates} from "@/app/components/Duplicates";
import {FormatAuthor} from "@/app/components/FormatAuthor";
import {Utils} from "@/app/components/Utils";

export const NewsBlock = (info: IData_SnippetNews) => {

    return (
        <>
            <div className={s['news-block']}>
                <div className={s['smm-info']}>
                    <FormatDate date={info.DP}/>
                    <FormatReach reach={info.REACH}/>
                    <FormatTraffic traffic={info.TRAFFIC}/>
                    <Utils info={info.SENT}/>
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
                            <FormatAuthor {...info.AU}/>
                        </Flex>
                    </div>
                </div>
                <Highlights highlights={info.HIGHLIGHTS}/>
                <Tags tags={info.KW}/>
                <div className={s['original-source']}>
                    <Button color="default" variant="filled">Original Source</Button>
                </div>
                <div className={s['duplicates-sort']}>
                    <div className={s['text']}>Duplicates:
                        <span className={s['white']}> {Math.floor(Math.random() * 100) + 1}</span>
                    </div>
                    <SortingDuplicates/>
                </div>
                <Duplicates {...info}/>
                <Button className={s['view-duplicates']} color="primary" variant="solid"><DownOutlined/> View Duplicates</Button>
            </div>
        </>
    );
};