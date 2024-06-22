

const LabelValueDisplay = ({ 
    label, 
    skills = [],
    value = "",
}) => {
  return (
    <div className={`flex justify-start items-center   p-4  shadow-md`}>
      <label className="mt-1 text-xl font-semibold text-gray-900">{label}</label>
      <p className="text-xl ml-5">{
      skills.length > 0 ? 
      skills.map(skill => `${skill}, `) 
      : value}</p>
    </div>
  );
};

export default LabelValueDisplay;
