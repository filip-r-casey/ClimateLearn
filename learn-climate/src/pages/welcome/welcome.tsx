import Nav from "../../components/Nav";

function Welcome() {
  return (
    <>
      <Nav />
      <div className="flex bg-primary h-screen">
        <div className="m-auto text-center">
          <h1 className="text-5xl text-primary-content font-bold mt-0 mb-6">
            ClimateLearn
          </h1>
          <h3 className="text-2xl text-primary-content font-bold mb-8">
            {" "}
            A teaching platform for tech skills in the climate sciences
          </h3>
        </div>
      </div>
      <div className="flex bg-secondary h-screen">
        <div className="flex items-center justify-center ml-10 mr-10">
          <h1 className="text-4xl font-bold mr-5">
            Climate Change is a Generational, Multi-faceted Problem
          </h1>
          <p className="text-2xl ml-5">
            Jobs in climate tech will become more common every year, and luckily
            there are many people willing to meet that demand. This site hopes
            to provide resources, training, and tutorials to those interested in
            climate tech.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
