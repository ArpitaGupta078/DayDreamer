

import { Link } from 'react-router-dom';

const App = () => {
return (
<div className="container col-xxl-8 px-4 py-5 cute-container">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
<div className="col-10 col-sm-8 col-lg-6">
<img src="/images/image5.jpg" className="d-block mx-lg-auto cute-img" alt="Colorful Bootstrap themes displayed on multiple device screens in a bright and modern workspace. The environment is clean and professional, evoking a sense of creativity and productivity. Text on the image reads Bootstrap Themes." width="500" height="550" loading="lazy" />
</div>
<div className="col-lg-6">
<h1 className="display-5 fw-bold cute-title lh-1 mb-3">DayDreamer</h1>
<p className="lead">
<strong>"From words to wonder".</strong>
<p>
DayDreamer is a platform that transforms your written words into immersive,
dreamlike experiences. Whether you're a writer, artist, or simply a dreamer, our
tools help you create and share your visions with the world.
</p>
</p>
<div className="d-grid gap-2 d-md-flex justify-content-md-start">
    <Link to="/img-gen">
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 cute-btn">
        Get Started
      </button>
    </Link>
    <Link to = "/learn-more">
    <button type="button" className="btn btn-outline-secondary btn-lg px-4 cute-btn-outline">
      Learn More
    </button>
    </Link>
</div>
</div>
</div>
</div>
);
};

export default App;