import React from 'react'

export const Filter = () => {
  return (
    <aside className="filters">
      <div className="filter_clear_div">
        <h3>Filters</h3>
        <button className="filter_clear">clear</button>
      </div>
      <h3>Price</h3>
      <div className="price_div">
        <div className="price_container">
          <p>1000</p>
          <p>1500</p>
          <p>2000</p>
        </div>
        <div className="price_slider">
          <input type="range" min="0" max="100" />
        </div>
        <h3>Sort by</h3>
        <div>
          <input
            type="radio"
            name="1"
            className="price_filer"
            id="price_filter_high"
          />
          <label htmlFor="price_filter_high"> Price-Low to High</label>
        </div>
        <div>
          <input
            type="radio"
            name="1"
            className="price_filer"
            id="price_filter_low"
          />
          <label htmlFor="price_filter_low"> Price-High to Low</label>
        </div>
      </div>
      <div className="product_category">
        <h3>Category</h3>
        <div className="each_category">
          <input type="checkbox" name="1" id='deodorant' />
          <label htmlFor='deodorant'>Deodorants</label>
        </div>
        <div className="each_category">
          <input type="checkbox" name="1" id='perfumes'/>
          <label htmlFor="perfumes"> Perfumes</label>
        </div>
        <div className="each_category">
          <input type="checkbox" name="1" id='fragrance' />
          <label htmlFor="fragrance"> Fragrance</label>
        </div>
        <div className="each_category"> 
          <input type="checkbox" name="1" id='bodySpray' />
          <label htmlFor="bodySpray"> Body Spray</label>
        </div>
      </div>
      <div className="price_slider">
        <h3>Ratings</h3>
        <div>
          <input type="radio" name="1" className="price_filter" id="4star" />
          <label htmlFor="4star"> 4 Stars & above</label>
        </div>
        <div>
          <input type="radio" name="1" className="price_filer" id="3star" />
          <label htmlFor="3star"> 3 Stars & above</label>
        </div>
        <div>
          <input type="radio" name="1" className="price_filer" id="2star" />
          <label htmlFor="2star"> 2 Stars & above</label>
        </div>
        <div>
          <input type="radio" name="1" className="price_filer" id="1star" />
          <label htmlFor="1star"> 1 Stars & above</label>
        </div>
      </div>
    </aside>
  )
}
