import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/layout-components/NewsCard";

const CategoryNews = () => {
  const { data: news, _id } = useLoaderData();
  console.log(news);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Dragon News Home</h2>
      {/* card */}
      <div className="flex flex-col gap-5">
        {news.map((singleNews, idx) => (
          <NewsCard key={idx} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
