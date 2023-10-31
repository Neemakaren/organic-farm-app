import './grid.css';
import img from '../../assets/1.jpg';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/6.jpg';
import img3 from '../../assets/4.jpg';
import img4 from '../../assets/5.jpg';
import img5 from '../../assets/6.jpg';

const Grid = () => {
  return (
    <div className='grid-container'>
         <h2 className='feat-h2'>Featured Products</h2>
         <div className="underline"></div>
        <div className="product-grid">
            <div className="grid-card stacked">
                <img src={img} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>fruits</h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img1} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>vegetables</h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img2} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>spices</h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img3} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>sunflower</h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img4} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>oats</h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img5} className='card-img' alt="" />
                <div className="grid-content">
                    <h2></h2>
                </div>
            </div>
            <div className="grid-card stacked">
                <img src={img} className='card-img' alt="" />
                <div className="grid-content">
                    <h2>fruits</h2>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Grid