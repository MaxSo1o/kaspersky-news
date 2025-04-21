import {getNews} from "@/app/api/news/news";
import {NewsBlock} from "@/app/NewsBlock";
import s from "./page.module.css";

export default function Home() {
  const {news} = getNews();
  return (
      <>
          <div className={s['container']}>
              {news.map(newsItem =>
                  <NewsBlock {...newsItem}  key={newsItem.ID} />
              )
              }
          </div>
      </>
  );
}
