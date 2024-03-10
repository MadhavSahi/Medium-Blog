// SignUp.tsx
import Auth from "../components/Auth";
import QuoteCard from "../components/QuoteCard";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-10 h-full bg-gray-100">
      <Auth type="signup" />
      <QuoteCard />
    </div>
  );
};

export default SignUp;
