import { useEffect, useState } from 'react';
import Loader from './Loader';
import styles from '../style';

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
      
      useEffect(()=>{
        fetchData();
      },[]);
      
  return (
    <div className="pt-8">
        <h1>SACCOs</h1>
            <p>Hold on as we retrieve Saccos near you</p>
            <div className={`${styles.flexCenter} flex-wrap gap-4`}>
            {loading ? (
            <Loader/>
            ) : (
            posts.map((post) => (
                <div className="bg-white rounded-lg shadow-lg p-6 w-[30%]" key={post.id}>
                <h2 className="text-xl font-bold mb-4">{post?.name}</h2>
                <p className="text-gray-700 mb-4">{post?.description}</p>
                <p className="text-gray-600">{post?.members}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View</button>
              </div>
            ))
            )}
            </div>
            </div>
  )
}

export default Saccos