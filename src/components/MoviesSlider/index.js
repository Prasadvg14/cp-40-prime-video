// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movies.map(each => (
        <MovieItem key={each.id} item={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
