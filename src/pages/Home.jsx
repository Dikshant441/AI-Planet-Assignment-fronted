import ExploreChallenges from "../components/ExploreChallenges";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import WhyParticipate from "../components/WhyParticipate";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <Statistics />
      <WhyParticipate />
      <ExploreChallenges />
    </div>
  );
};

export default Home;
