import TeamCard from "./team-card.js";

const team = [
  { name: "Anuj Ramatri", designation: "Founder and CEO" },
  { name: "Aman Rajpal", designation: "Cheif Technical Officer" },
  { name: "Aamna Sadiq", designation: "Content & Communications" },
  { name: "Jatin", designation: "Marketing & Seller Relations" },
];

const Team = () => {
  return (
    <>
      <div className="container flex justify-center mx-auto pt-10 pb-10 bg-gray-100">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            MEET OUR TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {team.map((member) => (
              <TeamCard member={member}></TeamCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
