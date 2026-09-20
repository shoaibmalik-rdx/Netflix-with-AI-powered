
import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

    
    return(
        <div className="m-12">
            <div>
                <h1 className="text-4xl font-bold mb-2 ">{title}</h1>
                <div className=" flex gap-6 overflow-x-scroll">
                    { movies?.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )) }
                </div>
            </div>
        </div>
    )
}


export default MovieList