import { useInputAuth } from "../hooks"

export const InputAuth = ({ label = "no label", type = "user", name, value="", onChange }) => {

    const { getIcon, getType } = useInputAuth(type)

    return (
        <div className="flex gap-4">

            {
                <img className="w-6" src={`${getIcon()}.svg`} alt={getIcon()} />
            }

            <span className="relative w-full">

                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={getType()}
                    placeholder=" "
                    className="w-full h-6 outline-none border-b-2 border-gray-400 text-sm relative z-10 peer/input"
                />

                <label htmlFor={name}
                    className="text-gray-600 absolute -top-2/3 left-0 peer-placeholder-shown/input:top-0 peer-focus/input:-top-2/3 transition-[top]"
                >
                    {label}
                </label>

            </span>

        </div>
    )
}