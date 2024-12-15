import { FaRegStar, FaStar, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    others_info,
    category_id,
  } = news;

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${category_id}`);
    console.log("working");
  };

  return (
    <div className="card w-full bg-white shadow-md border border-gray-200 hover:shadow-xl">
      <div className="card-body">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>
        {/* Title */}
        <h2 className="card-title mt-3 text-lg font-bold">{title}</h2>
      </div>

      {/* Card Image */}
      <figure className="w-11/12 h-96 overflow-hidden mx-auto rounded-md">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="object-cover w-full"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Description */}
        <p className="text-gray-600 text-sm">
          {details?.slice(0, 100)}...{" "}
          <Link
            to={`/news/${news._id}`}
            onClick={handleReadMore}
            className="text-yellow-500 cursor-pointer"
          >
            Read More
          </Link>
        </p>

        {/* Card Footer */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) =>
              index < Math.floor(rating.number) ? (
                <FaStar key={index} />
              ) : (
                <FaRegStar key={index} />
              )
            )}
            <span className="text-gray-500 text-sm ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
