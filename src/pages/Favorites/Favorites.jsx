import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BreedCard from "../../components/Breeds/BreedCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardSkeleton from "../../components/CardSkeleton";
import catImage from '../../components/FavoriteComponents/catImage';

const Favorite = () => {
    const { favorite } = useContext(DataContext);
    const [loading, setLoading] = useState(true); // Adding loading state

    console.log(favorite);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(favorite.length == 0);
        }, 300);
        return () => clearTimeout(timer); // Cancel the timeout that was previously set
    }, [favorite]); // [favorite because, this hook is dependent on the favorite state]

    return (
        <>
            <NavBar />
            {loading ? (
                <div className="grid grid-cols-4 gap-4 m-4">
                    {Array.from({ length: 10 }).map((_, index) => {
                        return <CardSkeleton key={index} />;
                    })}
                </div>
            ) : (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                    className="mx-4"
                >
                    <Masonry gutter="1rem" className="">
                        {favorite.map((cat, index) =>
                            {return cat.from === "breed"  ? (
                                <BreedCard key={index} catInfo={cat} />
                            ) : (
                                favorite.favoriteState ? <catImage key={index} catInfo={cat} /> : null
                            )}
                        )}
                    </Masonry>
                </ResponsiveMasonry>
            )}
            <Footer />
        </>
    );
};

export default Favorite;
