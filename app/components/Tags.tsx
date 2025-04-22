import s from "@/app/NewsBlock.module.css";
import {IData_TagItem} from "@/app/types/types";

export const Tags = ({tags}: {tags: IData_TagItem[]}) => {
    return (
        <div className={s['tags']}>
            {tags.map((tag: IData_TagItem, index: number) =>
                <div className={s['tag']} key={index}>
                    <span className={s['value']}>{tag.value}</span>
                    <span className={s['count']}>{tag.count}</span>
                </div>
            )}
        </div>
    )
}