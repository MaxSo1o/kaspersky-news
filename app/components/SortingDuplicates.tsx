import {ConfigProvider, Select} from "antd";
import s from "@/app/NewsBlock.module.css";
import {DownOutlined} from "@ant-design/icons";

export const SortingDuplicates = () => {
    return (
        <div className={s['sorting']}>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            optionSelectedColor: "#4c4c4c",
                            optionActiveBg: "#9a9a9a",
                            colorText: "#aeaeae",
                            colorTextPlaceholder: "#aeaeae",
                            colorBgElevated: "#272727",
                        },
                    }
                }}
            >
                <Select
                    defaultValue={'By Relevance'}
                    variant="borderless"
                    size="large"
                    suffixIcon={<DownOutlined style={{color: "#aeaeae"}} />}
                    options={[
                        { value: 'By Relevance', label: 'By Relevance' },
                        { value: 'By Date', label: 'By Date' },
                        { value: 'By Traffic', label: 'By Traffic' },
                        { value: 'By Reach', label: 'By Reach' },
                    ]}
                />
            </ConfigProvider>
        </div>
    )
}