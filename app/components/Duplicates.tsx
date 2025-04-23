import s from "@/app/NewsBlock.module.css";
import {DuplicatesComponent} from "@/app/components/DuplicatesComponent";
import {IData_SnippetNews} from "@/app/types/types";

export const Duplicates = (duplicates: IData_SnippetNews) => {
    const information = [duplicates]
    return (
        <div className={s['duplicates']}>
            {information.map(item =>
                <DuplicatesComponent {...item} key={item.ID}/>
            )
            }
        </div>
    )
}