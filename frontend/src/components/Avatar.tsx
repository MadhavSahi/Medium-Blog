const Avatar = ({initial}:{initial:string}) => {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-6 p-3 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">{initial}</span>
    </div>
  );
};

export default Avatar;
