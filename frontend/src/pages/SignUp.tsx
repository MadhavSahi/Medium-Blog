import Auth from "../components/Auth";
import QuoteCard from "../components/QuoteCard";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-row border-black border-2 justify-evenly pt-5 h-full">
        {/* <p>SignUp</p> */}
        <Auth type="signup" />
        <QuoteCard></QuoteCard>
      </div>
    </>
  );
};

export default SignUp;
