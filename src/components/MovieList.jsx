
import MovieCard from "./MovieCard"
import { MoveRight } from "lucide-react"


const MovieList = ({title, movies}) => {

    return(
        <div className="sm:mx-8 mx-4">
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="sm:text-3xl text-2xl font-bold sm:mt-12 mt-8 mb-5 ">{title}</h1>
                    <p className="text-gray-400 hover:text-white sm:mt-12 sm:flex hidden cursor-pointer text-sm  gap-1 items-center ">See All <MoveRight className="h-5 mt-[1px]" /></p>
                </div>
                <div className=" flex sm:gap-4  gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-md">
                    { movies?.map((movie) => (
                            <MovieCard key={movie.id} movieDetails={movie} />
                    )) }
                </div>
            </div>
        </div>
    )
}


export default MovieList