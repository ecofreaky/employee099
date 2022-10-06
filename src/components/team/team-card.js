const TeamCard = (props) => {
  const { member } = props;

  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mb-32 sm:mb-24 xl:max-w-xs lg:w-2/5">
      <div className="rounded overflow-hidden border bg-white">
        <div className="px-6 mt-4 mb-4">
          <div className="flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                alt=""
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <br></br>
          <div className="font-medium font-libre text-2xl text-center mb-2">
            {member.name}
          </div>
          <p className="text-gray-800 text-md text-center">
            {member.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
