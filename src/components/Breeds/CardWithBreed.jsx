import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardSkeleton from "../CardSkeleton";
import { DataContext } from "../../Context.jsx";

const CardWithBreed = () => {
    const { inputText } = useContext(DataContext);
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const getBreed = async () => {
        try {
            const response = await axios.get(
                `https://api.thecatapi.com/v1/breeds`
            );
            if (response.status === 200) {
                setBreeds(response.data);
                setLoading(false); // set loading to false once data is fetched
            }
        } catch (e) {
            console.error(`Card Breed Image Error: ${e}`); // set loading to false if there is an error
            setLoading(false); // set loading to false if there is an error
        }
    };

    useEffect(() => {
        getBreed();
    }, []);

    // Add search functionality
    const searchFunctionality = (inputText) => {
        return breeds.filter((breed) =>
            breed.name.toLowerCase().includes(inputText.toLowerCase())
        );
    };

    const filteredBreeds = searchFunctionality(inputText);

    return (
        <>
            <div className="px-4 py-2">
                {loading ? (
                    <div className="skeletonGrid grid grid-cols-4 gap-4 m-4">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CardSkeleton key={index} /> // Properly return the skeleton component
                        ))}
                    </div>
                ) : (
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                    >
                        <Masonry gutter="1rem">
                            {(inputText ? filteredBreeds : breeds).map(
                                (breed, index) => {
                                    return (
                                        <BreedCard
                                            catInfo={breed}
                                            key={index}
                                        />
                                    );
                                }
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                )}
            </div>
        </>
    );
};

export default CardWithBreed;
