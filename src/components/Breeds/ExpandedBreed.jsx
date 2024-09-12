import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../Context";

const ExpandedBreed = () => {
    const [breedInfo, setBreed] = useState({});
    const { breedId } = useParams();
    const [isActive, setIsActive] = useState(false);
    const { favorite, setFavorite } = useContext(DataContext);

    const url = `https://api.thecatapi.com/v1/breeds/${breedId}`;

    useEffect(() => {
        const fetchBreedData = async () => {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setBreed(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBreedData();
    }, [url]);

    const {
        name,
        description,
        origin,
        life_span: lifeSpan,
        temperament,
        wikipedia_url: wikipediaUrl,
        adaptability,
        intelligence,
        dog_friendly: dogFriendly,
        energy_level: energyLevel,
        stranger_friendly: strangerFriendly,
        reference_image_id,
    } = breedInfo;

    const imageUrl = reference_image_id ? `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg` : '';

    const handleFavorite = (data) => {
        data['from'] = 'breed';
        setIsActive(!isActive);
        setFavorite([...favorite, data]);
    };

    return (
        <>
            <div>
                <div className="font-sans grid place-items-center">
                    <div className="p-6 py-12 lg:max-w-5xl max-w-xl max-lg:mx-auto my-12 rounded-lg shadow-slate-300 lg:shadow-md shadow-none">
                        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-7 lg:gap-12 ">
                            <div className=" place-self-center h-full md:h-[400px] lg:h-[500px] lg:col-span-3  rounded-lg w-full top-0 text-center shadow-sm lg:shadow-lg shadow-slate-500 relative">
                                {/* bg-gradient-to-tr  from-[#5484df] via-[#97aec4] to-[#74c5f3] */}
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="object-cover mx-auto h-full w-full "
                                />
                                <button
                                    type="button"
                                    onClick={() =>handleFavorite(breedInfo)}
                                >
                                    <i
                                        className={`fa-solid fa-heart absolute top-3 right-3 text-2xl transition duration-300 ease-in-out ${
                                            isActive
                                                ? " text-red-700 scale-125"
                                                : "text-rose-300"
                                        }`}
                                    ></i>
                                </button>
                            </div>

                            <div className="lg:col-span-2 grid gap-y-2 sm:gap-y-3 md:gap-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                    {name}
                                </h2>
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <p className="text-gray-800 text-lg md:text-xl font-bold">
                                        Origin:
                                    </p>
                                    <p className="text-gray-400 text-lg md:text-xl">
                                        <span className="">{origin}</span>
                                    </p>
                                </div>

                                <div className="flex flex-col flex-wrap items-baseline gap-1">
                                    <p className="text-gray-800 text-lg md:text-xl font-bold">
                                        Temperament:
                                    </p>
                                    <p className="text-gray-400 text-base">
                                        <span className="">{temperament}</span>
                                    </p>
                                </div>

                                <div className="flex flex-col items-baseline gap-1">
                                    <p className="text-gray-800 text-lg md:text-xl font-bold">
                                        Description:
                                    </p>
                                    <p className="text-gray-400 text-base">
                                        <span className="text-justify">
                                            {description}
                                        </span>
                                    </p>
                                </div>

                                <div className="">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                                        About the Cat
                                    </h3>
                                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                        <li>
                                            The Average Lifespan of {name} is{" "}
                                            {<strong>{lifeSpan}</strong>} years.
                                        </li>
                                        <li>
                                            Intelligence level: {intelligence}.
                                        </li>
                                        <li>
                                            Dog Friendly level: {dogFriendly}.
                                        </li>
                                        <li>Energy level: {energyLevel}.</li>
                                        <li>
                                            Stranger Friendliness level:{" "}
                                            {strangerFriendly}.
                                        </li>
                                        <li>
                                            Adaptability level: {adaptability}.
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="button"
                                        className=" px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-md float-right lg:float-left"
                                    >
                                        <a href={wikipediaUrl} target="_blank " rel="noopener noreferrer">
                                            More Info
                                        </a>
                                    </button>

                                    <button
                                        type="button"
                                        className=" px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white text-base font-semibold rounded-md float-right lg:float-left flex gap-4 items-center"
                                    >
                                        <i className="fas fa-arrow-left"></i>{" "}
                                        <Link to={"/catBreeds"}>Go Back</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpandedBreed;
