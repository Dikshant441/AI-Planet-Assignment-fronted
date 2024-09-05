const WhyParticipateCard = ({ item }) => {
  return (
    <div className="mb-4 p-8 bg-gray-100 rounded-2xl space-y-4 border border-transparent ">
      <img className=" p-4 rounded-lg w-fit"
      src={item.icon}
      />
      <h4 className="font-bold">{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default WhyParticipateCard;
