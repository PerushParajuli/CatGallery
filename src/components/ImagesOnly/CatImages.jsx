import CatCard from "./CatCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardSkeleton from "../CardSkeleton";

const CatImages = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true); // Adding loading state
    const imagePerPage = 100;
    const totalImages = 400;
    const apiKey =
        "live_wNLK0Wf2VoxuuJLTnd4mrKJnxekQK7uPNVaUlJmca4LEtUL3UxqQSNqeVGClEfR8";
    const url = `https://api.thecatapi.com/v1/images/search?limit=${imagePerPage}&api_key=${apiKey}`;

    const fetchData = async () => {
        let allCats = []; // to store all 1000 images
        try {
            for (let i = 0; i < totalImages / imagePerPage; i++) {
                const response = await axios.get(url);
                if (response.status === 200) {
                    allCats = [...allCats, ...response.data]; // Append to previous list
                }
            }
            setCats(allCats);
            setLoading(false); // Stop loading once the data is whetch
        } catch (error) {
            console.error("Error fetching the Images:", error);
            setLoading(false); // Stop loading when there is error in data being fetched
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="px-4 py-2">
                {loading ? (
                    <div className="skeleton-grid grid grid-cols-4 gap-4">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CardSkeleton key={index} /> // Properly return the skeleton component
                        ))}
                    </div>
                ) : (
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                    >
                        <Masonry gutter="1rem">
                            {cats.map((cat, index) => {
                                return <CatCard catInfo={cat} key={index} />;
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                )}
            </div>
        </>
    );
};

export default CatImages;
