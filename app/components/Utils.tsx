import s from "@/app/NewsBlock.module.css";
import {Checkbox, ConfigProvider} from "antd";
import {ExceptionOutlined} from "@ant-design/icons";

export const Utils = ({info}: {info: string}) => {
    console.log(info)

    return (
        <>
            <div className={s['utils']}>
                <div className={s['quality']}>
                    <span className={s[`${info === 'positive' ? 'positive' : 'negative'}`]} style={{textTransform: 'capitalize'}}>{info}</span>
                </div>
                <div className={s['complain']}>
                    <ExceptionOutlined style={{height: '100%'}}/>
                </div>
                <div className={s['checkbox']}>
                    <ConfigProvider theme={{
                        token: {
                            colorBgContainer: 'none',
                            colorBorder: '#aeaeaeae',
                            borderRadiusSM: 1,
                            lineWidth: 2,
                        }
                    }}>
                        <Checkbox></Checkbox>
                    </ConfigProvider>
                </div>
            </div>
        </>

    )
}