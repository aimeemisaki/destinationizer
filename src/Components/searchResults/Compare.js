import City1 from './City1';
import City2 from './City2';
import { useParams } from 'react-router-dom';
import { resultFix } from '../../data-and-functions/resultFix';
import { Carousel } from 'react-bootstrap';



const Compare = () => {
    const { inputCity1, inputState1, inputCity2, inputState2 } = useParams()
    const endPoint1 = resultFix(`${inputCity1}`, `${inputState1}`)
    const endPoint2 = resultFix(`${inputCity2}`, `${inputState2}`)

    return (
        <>
            <video id="search-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-car-on-a-road-through-the-forest-and-meadow-27001-large.mp4">
  		    </video>
            <Carousel>
                <Carousel.Item>
                    <div>
                        <City1 city1={endPoint1}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <City2 city2={endPoint2} />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default Compare
