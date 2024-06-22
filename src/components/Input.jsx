

function Input({
    type="text",
    name,
    value,
    label,
    placeholder="",
    onChange,
}){
    return(
        <div className="mb-2">
            <div 
                className="text-xs mb-1 font-semibold"
            >{label}</div>
            <input 
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border-gray-300 border-[1.5px] rounded-lg w-full px-2 py-1 placeholder:text-gray-400 placeholder:text-sm"
            />
        </div>
    )
}
export default Input;