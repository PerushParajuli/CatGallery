import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context";

const CatCard = ({ catInfo }) => {
    const { favorite, setFavorite } = useContext(DataContext);
    const [isActive, setIsActive] = useState(false);
    let breed = catInfo.breeds[0];
    let name;
    breed ? (name = breed.name) : (name = "Unknown");
    const { id: catId, url: imageUrl } = catInfo;

    const handleFavorite = (catInfo) => {
        catInfo['from'] = 'home';
        setIsActive(!isActive);
        setFavorite([...favorite, catInfo]);
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
                    }`}
                ></i>
            </button>
        </div>
    ) : null;
};

export default CatCard;
