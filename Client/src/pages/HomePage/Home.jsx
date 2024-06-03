import "@coreui/coreui/dist/css/coreui.min.css";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Info } from "../../Components/Info/Info";
import { Header } from "../../Components/Headers/Header";
import Contact from "../../Components/ContactUs/Contact";
import FAQ from "../../Components/FAQ/Faq";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <Header />
      <div className="heroSec">
        <div className="div1">
          <h1>Save Life Donate Blood</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>Get Free Checkup</button>
        </div>
        <div className="div2">
          <div className="circle"></div>
          <div className="halfCircle halfCircle1"></div>
        </div>
      </div>
      <Info />

      <div className="bloodDonateSec">
        <h1>What are you waiting For ?</h1>
        <button
          onClick={(e) => {
            navigate("/signup");
          }}
        >
          DONATE NOW
        </button>
      </div>
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
