function SelectMultiple({
    label,
    options,
    name,
    value,
    onChange,
}){

  return (
    <div className="flex flex-col mb-3">
       <div className="text-xs mb-1 font-semibold">{label}</div>
        {options.map(option => (
          <label key={option.value} className="flex items-center mb-2 text-sm">
            <input
              type="checkbox"
              name={name}
              value={option.value}
            //   checked={value.includes(option.value)}
              onChange={onChange}
              className="mr-2 checked:bg-white checked:text-blue-500"
            />
            {option.label}
          </label>
        ))}
    </div>
  );
}

export default SelectMultiple;