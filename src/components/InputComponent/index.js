export default function InputComponent({ label, onChange, value, type, placeholder, inputMode }) {

    return (
        <div className="relative h-[40px]">
            <p className="pt-0 pr-2 pb-0 pl-2 absolute mt-[-13px] mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">{label}</p>
            <input
                placeholder={placeholder}
                type={type || "text"}
                value={value}
                onChange={onChange}
                inputMode={inputMode}
                className="border h-8 placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
        </div>
    )
}