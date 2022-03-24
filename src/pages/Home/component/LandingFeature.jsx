const LandingFeature = ({ featureCardImg, featureCardName }) => {
  return (
    <div className="home_features">
      <img className="featureImg" src={featureCardImg} alt="image" />
      <a href="">
        <button className="card_btn addto_cart">{featureCardName}</button>
      </a>
    </div>
  )
}

export { LandingFeature }
