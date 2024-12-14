import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Find Us</h2>
      <div className="join flex join-vertical bg-white border-gray-500">
        {/* Facebook */}
        <button className="btn join-item bg-white text-gray-500 hover:bg-gray-500 border-gray-500 hover:text-white transition justify-start">
          <span className="text-blue-600 p-2 bg-gray-200 rounded-full">
            <FaFacebookF />
          </span>
          Facebook
        </button>
        {/* Twitter */}
        <button className="btn join-item bg-white text-gray-500 hover:bg-gray-500 border-gray-500 hover:text-white transition justify-start">
          <span className="text-blue-400 p-2 bg-gray-200 rounded-full">
            <FaTwitter />
          </span>
          Twitter
        </button>
        {/* Instagram */}
        <button className="btn join-item bg-white text-gray-500 hover:bg-gray-500 border-gray-500 hover:text-white transition justify-start">
          <span className="text-red-500 p-2 bg-gray-200 rounded-full ">
            <FaInstagram />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
