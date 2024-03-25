import { useEffect, useState } from "react";
import Loader from "./Loader";
import styles from "../style";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Saccos = () => {
  // loading state
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // fetch data
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("../../data.json");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-8">
      <h1>SACCOs</h1>
      <p>Hold on as we retrieve Saccos near you</p>
      <div className={`${styles.flexCenter} flex-wrap gap-4`}>
        {loading ? (
          <Loader />
        ) : (
          posts.map((post) => (
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-[30%]"
              key={post.id}
            >
              <h2 className="text-xl font-bold mb-4">{post?.name}</h2>
              <p className="text-gray-700 mb-4">{post?.description}</p>
              <p className="text-gray-600 flex gap-1 items-center bg-[#f1f4f9] w-fit py-[5px] px-[10px] rounded-lg">
                <LuUsers />
                {post?.members}
              </p>
              <p>
                <a href="#">View more</a>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Saccos;
