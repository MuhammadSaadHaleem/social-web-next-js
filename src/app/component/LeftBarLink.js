
const LeftBarLink = ({  text }) => {
  return (
    <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
      <h1 className="text-[16px] font-medium">{text}</h1>
    </div>
  );
};

export default LeftBarLink;