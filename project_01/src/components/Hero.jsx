const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-contents">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="hero-icon">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./image/amazon.png" alt="Amazon-logo" />
            <img src="./image/flipkart.png" alt="Flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./image/shoe_image.png" alt="Shoes-image" />
      </div>
    </main>
  );
};

export default HeroSection;
