import './services.css'
import img from '../../assets/ship.svg'
import img1 from '../../assets/discount.svg'
import img2 from '../../assets/money.svg'
import img3 from '../../assets/support.svg'

const Services = () => {
  return (
    <div className='services-con'>
        <div className="con-1">
         <img src={img} alt="" className='con-img'/>
         <h3 className='con-head'>Free Shipping</h3>
         <p className='service-detail'>Free shipping on all order</p>
        </div>
        <div className="con-1">
         <img src={img1} alt="" className='con-img'/>
         <h3 className='con-head'>Member Discount</h3>
         <p className='service-detail'>Back guarantee under 7 days</p>
        </div>
        <div className="con-1">
         <img src={img2} alt="" className='con-img'/>
         <h3 className='con-head'>Money Return</h3>
         <p className='service-detail'>Support online 24 hours a day</p>
        </div>
        <div className="con-1">
         <img src={img3} alt="" className='con-img' />
         <h3 className='con-head'>Online Support</h3>
         <p className='service-detail'>Online Support 24/7</p>
        </div>
    </div>
  )
}

export default Services