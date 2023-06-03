import {ChangeEvent, useState} from "react";


export function PhoneShowcase({setPhone}: { setPhone: (phoneId: number) => void }) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(parseInt(event.target.value));
    }
    return (
        <ul className="grid grid-cols-6 gap-6 text-center">
            <li className="col-span-2">
                <input
                    type="radio"
                    value="1"
                    onChange={ handleChange }
                    id="1"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="1"
                       className="inline-flex transition hover:scale-105 duration-700 rounded-[20px] py-3 flex-wrap w-[200px] items-center justify-center border border-transparent peer-checked:border-gray-500 peer-checked:bg-gray-100">
                    <img
                        alt="iPhone 14 128GB"
                        src="https://telemach.si/upload/iphone-14_blue_500x700_20221003_155818_500x700.png"
                    />
                    <span className="py-2 font-bold">
                        iPhone 14 128GB
                    </span>
                </label>
            </li>
            <li className="col-span-2">
                <input
                    type="radio"
                    value="2"
                    onChange={ handleChange }
                    id="2"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="2"
                       className="inline-flex transition hover:scale-105 duration-700 flex-wrap w-[200px] h-full items-center justify-center peer-checked:bg-gray-100">
                    <img
                        alt="Galaxy S23+ 256GB"
                        src="https://telemach.si/upload/s23-phantom-black-front_20230202_094234_500x700.png"
                    />
                </label>
            </li>
            <li className="col-span-2">
                <input
                    type="radio"
                    value="3"
                    onChange={ handleChange }
                    id="3"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="3"
                       className="inline-flex flex-wrap h-full w-[200px] items-center justify-center peer-checked:bg-gray-100">
                    <img
                        alt="XIAOMI 13"
                        src="https://telemach.si/upload/xiaomi-13-front_20230407_134951_500x700.png"
                    />
                </label>
            </li>
            <li className="col-span-2">
                <input
                    type="radio"
                    value="5"
                    onChange={ handleChange }
                    id="5"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="5"
                       className="inline-flex flex-wrap h-full w-[200px] items-center justify-center peer-checked:bg-gray-100">
                    <img
                        alt="HUAWEI Nova 9 SE"
                        src="https://telemach.si/upload/huawei_nova_9_se_blue_20220610_142752_500x700.png"
                    />
                </label>
            </li>
            <li className="col-span-2">
                <input
                    type="radio"
                    value="6"
                    onChange={ handleChange }
                    id="6"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="6"
                       className="inline-flex flex-wrap h-full w-[200px] items-center justify-center peer-checked:bg-gray-100">
                    <img
                        alt="HONOR Magic4 Lite 5G"
                        src="https://telemach.si/upload/honor_magic_4_lite_5g_srebrna_20220610_142755_20221201_083727_500x700.png"
                    />
                </label>
            </li>
            <li className="col-span-2">
                <input
                    type="radio"
                    value="4"
                    onChange={ handleChange }
                    id="4"
                    name="phones"
                    className="hidden peer"
                />
                <label htmlFor="4"
                       className="inline-flex flex-wrap h-full w-[200px] items-center justify-center peer-checked:bg-gray-100">
                    <img
                        alt="REALME C30"
                        src="https://telemach.si/upload/realme-c30-front_20220905_140009_500x700.png"
                    />
                    <span>
                        REALME C30
                    </span>
                </label>
            </li>
        </ul>
    )
}