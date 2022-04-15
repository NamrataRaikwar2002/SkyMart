import { Link } from 'react-router-dom'
import { useFilter } from '../../../hooks/context/filterContext'

const LandingFeature = ({ featureCardImg, featureCardName }) => {
  const { filterDispatch } = useFilter()
  return (
    <div className="home_features">
      <Link
        to="/product-list"
        onClick={() => filterDispatch({ type: 'PERFUME', payload: true })}
      >
        <img className="featureImg" src={featureCardImg} alt="image" />
        <button className="card_btn addto_cart">{featureCardName}</button>
      </Link>
    </div>
  )
}

export { LandingFeature }
