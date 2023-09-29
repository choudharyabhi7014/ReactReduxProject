import {useState,useEffect} from 'react'
import Data from '../Data/Sliderdata';


function Slider() {
    const [slide, setslide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setslide((prevSlide) => (prevSlide + 1) % Data.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <>
      <div className='slider'>
        {
            Data.map((item,i)=>{
                return (<>
                <div key={i} className={`data ${i===slide ?'active':''}`}>
                    <img  src={item.img} alt="" />
                </div>
                </>)
            })
        }
      </div>
    </>
  )
}

export default Slider
