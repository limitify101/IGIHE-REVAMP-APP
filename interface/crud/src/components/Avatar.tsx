interface Props{
    name:string;
}
const Avatar = ({name}:Props) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
    const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";
  
    return (
      <span className='flex justify-center items-center border w-8 h-8 rounded-full bg-[#0876BB] text-white cursor-pointer'>
        {firstNameInitial}
        {lastNameInitial}
      </span>
    );
  };

export default Avatar