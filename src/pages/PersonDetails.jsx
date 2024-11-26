import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { formatDateAndAge } from "../utils";
import SocialLinks from "../components/SocialLinks";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import HorizontalScollCard from "../components/HorizontalScollCard";


const PersonDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchDetails(`/person/${id}`);
  const {data: cast} = useFetchDetails(`/person/${id}/movie_credits`)
  const {data: socials} = useFetchDetails(`/person/${id}/external_ids`)
  const [isBiographyExpanded, setBiographyExpanded] = useState(false);

  if (loading) {
    return <div className="text-center mt-16">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-16">Error {error.message}</div>;
  }

  if (!data) {
    return <div className="text-center mt-16">Data not found</div>;
  }

  return (
    <div className="container mx-auto mt-16 px-3">
      <div className="flex gap-4 flex-col items-center md:items-start md:flex-row">
        <div className="shadow-md grow shrink-0 md:basis-[40%] flex md:flex-col md:items-start gap-4 justify-between">
          <img
            src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
            alt={data.name}
            className="rounded-lg md:object-cover max-h-80 md:max-h-max"
          />
          <SocialLinks data={socials} />
        </div>
        <div className="px-3 md:basis-[60%] grow-0">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <div className="mb-2">
            { data.deathday ? (
              <strong>Years of Life</strong>
            ) : (
              <strong>Birthday</strong>
            )}
            <div>{formatDateAndAge(data.birthday, data?.deathday) || "No info"}</div>
          </div>
          <div className="mb-2">
            <strong>Place of Birth</strong>
            <p>{data.place_of_birth || "No info"}</p>
          </div>
          <p className="mb-2">
            <strong className="mr-2">Popularity</strong><span>{data.popularity.toFixed(1)}</span>
          </p>
          <div className="mb-4">
            <strong>Biography</strong>
            <p
              className={
                isBiographyExpanded ? "text-white" : "text-white line-clamp-3"
              }
            >
              {data.biography || "No info"}
            </p>
            {data.biography && (
              <div className="text-center">
                <button
                  onClick={() => setBiographyExpanded(!isBiographyExpanded)}
                  className="mt-2 text-white font-semibold hover:underline"
                >
                  <span className="text-md text-white">
                    {
                      isBiographyExpanded ? (
                        <IoIosArrowDropupCircle />
                      ) : (
                        <IoIosArrowDropdownCircle />
                      )
                    }
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {cast ? (
        <HorizontalScollCard data={cast.cast} heading="Known for" media_type={"movie"}/>
      ):(
        <div>No movies found...</div>
      )}
    </div>
  );
};

export default PersonDetails;
