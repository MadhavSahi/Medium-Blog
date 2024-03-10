// QuoteCard.tsx
const QuoteCard = () => {
  return (
    <div className="border border-gray-300 p-6 flex flex-col justify-center w-full md:w-[50%] mt-6 md:mt-0 bg-white rounded-lg">
      <p className="text-gray-800 font-bold text-lg mb-4">
        "The customer service I received was exceptional. The support team went
        above and beyond to address my concerns."
      </p>
      <p className="text-gray-800 font-semibold text-md">Jules Winnfield</p>
      <p className="text-gray-600 font-semibold text-md">CEP, Acme Inc.</p>
    </div>
  );
};

export default QuoteCard;
