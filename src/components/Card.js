import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link, useLocation } from 'react-router-dom'

const Card = ({data,trending,index,media_type }) => {
    const imageURL = useSelector(state => state.movieoData.imageURL);
    const location = useLocation()
    const mediaType = data.media_type ?? media_type
    const addClass = location?.pathname === '/movie' || location?.pathname === '/tv' ? '' : 'w-full min-w-[230px]'

    return (
    <Link to={"/"+mediaType+"/"+data.id} className={`${addClass} md:max-w-[230px] h-72 md:h-96 overflow-hidden block rounded relative hover:scale-105 transition-all`}>
        {
            data?.poster_path ? (
                <img className="h-48 md:h-72 w-full object-cover"
                    src={imageURL+data?.poster_path}
                    alt={data?.title || data.name}
                />
            ) : (
                <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
                    No image found
                </div>
            )

        }

        <div className='absolute top-4 '>
            {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                        #{index} Trending
                    </div>
                )
            }
        </div>

        <div className='absolute bottom-0 h-24 backdrop-blur-3xl w-full  bg-black/60 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
            <div className='text-sm text-neutral-400 flex gap-1 flex-col justify-start items-start'>
                <p>{ moment(data.release_date).format("MMMM Do YYYY") }</p>
                <p className='bg-black px-1 rounded-full text-xs text-white'>Rating :{Number(data.vote_average).toFixed(1)}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card
