import {getNews} from "@/app/api/news/news";
import {NewsBlock} from "@/app/NewsBlock";
import s from "./page.module.css";
import {IData_SnippetNews} from "@/app/types/types";

export default function Home() {
  const infoNews: IData_SnippetNews[] = getNews().news;
  return (
      <>
          <div className={s['container']}>
              {infoNews.map(newesItem =>
                  <NewsBlock {...newesItem}  key={newesItem.ID} />
              )
              }
          </div>
      </>
  )
}
