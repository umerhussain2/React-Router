import "./css/Home.css";

const Home = () => {
  return (
    <div id="home">
      <h1 className="home-heading">Home Page</h1>

      <div className="home-content">
        <h3>React Router</h3>
        <p>
          React Router is a JavaScript framework that lets us handle client and
          server-side routing in React applications. It enables the creation of
          single-page web or mobile apps that allow navigating without
          refreshing the page. It also allows us to use browser history features
          while preserving the right application view.
        </p>
      </div>
    </div>
  );
};

export default Home;
