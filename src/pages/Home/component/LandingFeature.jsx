import {Link} from 'react-router-dom'

const LandingFeature = ({ featureCardImg, featureCardName }) => {
  return (
    <div className="home_features">
      <img className="featureImg" src={featureCardImg} alt="image" />
      <Link to='/product-list'>
        <button className="card_btn addto_cart">{featureCardName}</button>
      </Link>
    </div>
  )
}

export { LandingFeature }
