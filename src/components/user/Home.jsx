import AboutApp from "./homePageComponent/AboutApp";
import KnowLedgeCard from "./homePageComponent/KnowLedgeCard";
import AboutUs from "./homePageComponent/AboutUs";
import Footer  from "./homePageComponent/Footer"
function Home() {
  return (
    <div className="w-full">
      <div>
        <AboutApp/>
        <KnowLedgeCard/>
        <AboutUs/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
