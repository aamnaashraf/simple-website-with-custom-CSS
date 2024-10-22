import Image from "next/image";
import Link from "next/link";
import Navbar from '../components/Navbar';



const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <h1 className="title">Welcome to LearnHub</h1>
        <p className="description">
          Your one-stop platform for learning online courses in various domains.
        </p>
        <div className="buttons">
          <button className="readMoreBtn">Read More</button>
          <button className="joinNowBtn">Join Now</button>
        </div>
      </main>
      <link href="/about"></link>
      <Link href="/courses"></Link>
      <Link href="/contact"></Link>
    
    </div>


  );
};

export default Home;
