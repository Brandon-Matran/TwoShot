import ImageSlider from "./ImageSlider";
import './index.css';

function MainPage() {
  const slides = [
    {url: "http://localhost:3000/CoolHats1.jpg", title: "Hat1"},
    {url: "http://localhost:3000/CoolHats2.jpg", title: "Hat2"},
    {url: "http://localhost:3000/CoolShoes1.jpg", title: "Shoes1"},
    {url: "http://localhost:3000/CoolShoes2.jpg", title: "Shoes2"}
  ]

  const containerStyles = {
    width: '500px',
    height: '250px',
    margin: '0 auto',
  };

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">WARDROBIFY!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Need to keep track of your shoes and hats? We have
          the solution for you!
        </p>
        <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
      </div>
    </div>

  );
}

export default MainPage;
