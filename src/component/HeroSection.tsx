// import Background from "../assets/bg.jpg";
import Logo from "../assets/mrfox-logo-y.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div
        className="h-screen relative main-page"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-60 mx-auto" src={Logo} alt="jfin_chain" />
          <p className="text-center mt-8 text-7xl font-bold uppercase">
            Beyond the Future
          </p>
          <p className="text-center mt-4 text-black/70 px-8">
            MrFoxChain believes in Web3 for all. MrFoxChain is a decentralised EVM
            scaling platform that enables developers to build scalable
            user-friendly dApps with low transaction fees without ever
            sacrificing on security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
