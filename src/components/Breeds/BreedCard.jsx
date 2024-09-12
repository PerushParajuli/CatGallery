import React from "react";
import { Link } from "react-router-dom";

const BreedCard = ({ catInfo }) => {
    // deconstructing catInfo using const{...} = catInfo
    const {
        reference_image_id,
        id: breedId, // Renaming id to breedId
        name,
        description,
        life_span: lifeSpan, // Renaming life_span to lifeSpan
        origin,
        adaptability,
        affection_level: affectionLevel,
        child_friendly: childFriendly,
        grooming,
        intelligence,
        social_needs: socialNeeds,
    } = catInfo;
    
    const imageUrl = `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`;


    return reference_image_id ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow ">
            <img
                className="rounded-t-lg"
                src={imageUrl}
                alt="A Cat Image"
                loading="lazy"
            />
            <div className="p-5">
                <Link to={`/catBreeds/${breedId}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {name}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <Link
                    to={`/catBreeds/${breedId}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                    Read more
                </Link>
            </div>
        </div>
    ) : null;
};

export default BreedCard;
