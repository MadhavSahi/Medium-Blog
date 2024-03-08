const QuoteCard = () => {
  return (
    <>
      <div className="border-black border-2 flex flex-col justify-normal w-[50%]    ">
        {/* <p>QuoteCard</p> */}
        <p className="text-black font-bold text-lg items-center">
          "The customer service I received was excdptional. The support team
          went above and beyond to address my concerns."
        </p>
        <p className="text-black font-semibold text-md text- ">Jules Winnfield</p>
        <p className="text-gray-600 font-semibold text-md">CEP, Acme Inc.</p>
      </div>
    </>
  );
};

export default QuoteCard;
