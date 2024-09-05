import staticsIcon from "../assets/statics-1.svg";
import skillIcon from "../assets/statics-2.svg";
import challengeIcon from "../assets/statics-3.svg";

const items = [
  {
    icon: staticsIcon,
    number: "100K+",
    title: "AI model submissions",
  },
  {
    icon: skillIcon,
    number: "50K+",
    title: "Data Scientists",
  },
  {
    icon: challengeIcon,
    number: "100+",
    title: "AI Challenges hosted",
  },
];


const Statistics = () => {
  return (
    <section className="py-16 bg-custom-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x">
        {items.map((item) => (
          <div
            className="flex items-center justify-center first:justify-start last:justify-end space-x-4"
            key={item.number}>
            <h4 className="aspect-square rounded-xl bg-white p-">
              <img src={item.icon} alt={item.title} className="w-full" />
            </h4>
            <div>
              <h4 className="text-white">{item.number}</h4>
              <p className="text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
