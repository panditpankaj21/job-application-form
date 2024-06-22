function TextArea({
    name,
    value,
    onChange,
    label,
}){
    return(
        <div>
            <div 
                className="text-xs mb-2 font-semibold"
            >{label}</div>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="border-gray-300 border-[1.5px] rounded-lg w-[70%] px-2 py-1 placeholder:text-gray-400 placeholder:text-sm"
            >
            </textarea>
        </div>
    )
}

export default TextArea;