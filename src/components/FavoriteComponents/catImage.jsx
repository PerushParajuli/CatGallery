import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context";

const catImage = ({ catInfo }) => {
    const { favorite, setFavorite } = useContext(DataContext); // Global favorites state
    const [isActive, setIsActive] = useState(false); // Local state to toggle the heart icon

    let breed = catInfo.breeds[0];
    let name = breed ? breed.name : null;
    const { id: catId, url: imageUrl } = catInfo;

    // Effect to sync local state with global state
    useState(() => {
        // checking if the current cat is in the favorites
        const isFavorite = favorite.some((item) => item.id === catId);
        setIsActive(isFavorite); // Set the active state based on global favorites
    }, [favorite, catId]);

    const handleFavorite = (catInfo) => {
        const updatedCatInfo = {
            ...catInfo,
            favoriteState: !isActive, // Toggle the favorite state (true or false)
            from: "home", // Add the "from" field
        };

        if (isActive) {
            // If it's already a favorite, remove it
            setFavorite(favorite.filter((item) => item.id !== catId));
        } else {
            // If it's not a favorite, add it
            setFavorite([...favorite, updatedCatInfo]);
        }
    };

    return imageUrl ? (
        <div className="rounded-lg shadow-lg relative bg-slate-700 group">
            <Link to={"/home"}>
                <img
                    className="object-cover group-hover:opacity-60 w-full h-full"
                    src={imageUrl}
                    alt="A Cat Image"
                    loading="lazy"
                />
            </Link>
            <span className="opacity-0 group-hover:opacity-100 absolute text-white text-3xl font-semibold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-75 ease-in">
                {name === "Unknown" ? null : name}
            </span>
            <button onClick={() => handleFavorite(catInfo)} type="button">
                <i
                    className={`fa-solid fa-heart absolute top-2 right-2 transition text-2xl  duration-300 ease-in-out cursor-pointer
                        ${isActive ? "text-red-700 scale-125" : "text-rose-300"}
                    `}
                ></i>
            </button>
        </div>
    ) : null;
};

export default catImage;
