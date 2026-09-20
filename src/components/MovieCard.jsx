
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {

    return(
        <div className="shrink-0 max-w-48 ">
            <img className="w-full" src={IMG_CDN_URL + posterPath} alt="movie-card" />
        </div>
    )
}

export default MovieCard