import placeholderpic from "../assets/dummy1000x750.png";

export default function Test() {
  return (
    <>
      <footer className="bg-dark text-light p-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="text-white">GitHub</p>
            </div>
            <div className="col text-center">
              <p className="text-white">LinkedIn</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  sed tenetur perspiciatis ducimus iste eaque dicta voluptates
                  deserunt qui sit fugiat labore odio tempora a, in porro minima
                  eveniet id.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a card</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a card</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a card</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
