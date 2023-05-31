import {Link} from "react-router-dom";
import Paths from "../Paths";
import home_page_first from "../pictures/home_page_first.jpg"
import home_page_second from "../pictures/home_page_second.jpg"

export default function HomePage() {

    return (
        <div className="bg-white py-6 sm:py-12 md:mx-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex justify-center">
                    <img
                        alt=""
                        className="h-56 md:h-72 lg:h-96"
                        src={home_page_first}
                    />
                </div>
                <div className="pt-10 self-center lg:pt-0 px-10 md:px-28 md:mr-[200px]">
                    <span className="inline text-3xl md:w-20 title-a md:text-5xl pr-4">
                        SAMOPOSTREŽNI PORTAL
                    </span>
                    <span className="">
                            najnovejši slovenski ponudnik ITK storitev
                        </span>
                </div>
            </div>
            {/**/}
            <div className="grid gap-12 grid-cols-1 pt-10 lg:grid-cols-3 mx-10 md:mx-20">
                <Link
                    onClick={() => window.scroll(0, 0)}
                    to={Paths.REGISTER}>
                    <div className="transition p-4 hover:scale-105 duration-500">
                        <div className="border rounded-[10px] bg-gray-100 col-span-1 border-4-gray-900 text-center">
                            <div
                                className="relative overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed transition duration-300 ease-in-out hover:opacity-100">
                                <svg className="w-16 h-16 mx-auto mt-6 text-600" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                                </svg>
                            </div>
                            <div className="py-3">
                                <p className="mb-4 text-base font-bold text-800">Aktivirajte naročniški portal</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    onClick={() => window.scroll(0, 0)}
                    className="rounded-[10px] transition hover:scale-105 duration-500 border col-span-1 bg-gray-100 border-4-gray-900 flex justify-center flex-wrap text-center"
                    to={Paths.MOBILE_PLANS}>
                    <div
                        className="relative w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed transition duration-300 ease-in-out hover:opacity-100">
                        <svg className="w-16 h-16 mx-auto mt-6 text-600" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                        </svg>
                    </div>
                    <div className="pb-8 lg:pb-2">
                        <p className="text-base font-bold text-800">5G omrežje vsepovsod po svetu</p>
                    </div>
                </Link>
                <Link to={Paths.TV_PLANS} onClick={() => window.scroll(0, 0)}>
                    <div className="p-4">
                        <div
                            className="transition hover:scale-105 duration-500 rounded-[10px] border bg-gray-100 col-span-1 border-4-gray-900 text-center">
                            <div
                                className="relative overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed transition duration-300 ease-in-out hover:opacity-100">
                                <svg className="w-16 h-16 mx-auto mt-6 text-600" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"/>
                                </svg>
                            </div>
                            <div className="py-3">
                                <p className="mb-4 text-base font-bold  text-800">Televizijski paketi</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {/**/}
            <div className="grid grid-cols-6 gap-4 py-20">
                <div className="col-span-6 lg:col-span-3 xl:col-span-4 lg:flex">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h2 className="text-2xl tracking-tight text-gray-900 font-bold uppercase">
                            Za Vas ustvarjamo proprostejši dostop do digitalnih in spletnih storitev
                        </h2>
                        <p className="mt-6 leading-7 text-gray-600 ">
                            Samopostrežni portal je najnaprednejši slovenski ponudnik najsodobnejših IKT-storitev in
                            rešitev.
                            <br/>
                            Strmimo k temu, da olajšamo dostop do digitalnih storitev naše poslovalnice, ter lažje
                            in hitrejše komuniciranje s strankami.
                            Skrbimo, da uporabniku olajšamo dostop do njegovih in spletnih naročnin, ki jih naš
                            portal ponuja.
                        </p>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center lg:col-span-3 xl:col-span-2">
                    <img
                        className="w-[90%] md:w-[50%] lg:w-[100%]"
                        alt=""
                        src={home_page_second}
                    />
                </div>
            </div>
            {/*
                <div className="grid grid-cols-6 gap-14">
                    <div className="col-span-2">
                        <PicCard
                            image="https://www.devicemagic.com/wp-content/uploads/2020/10/person_using_smartphone-2.jpg"
                            section="5G MOBILNO OMREŽJE"
                            description="Izboljšan prenos kakršnih koli vsebin po vsem svetu"
                        />
                    </div>
                    <div className="col-span-2">
                        <PicCard
                            image="https://img.freepik.com/premium-photo/happy-hindu-guy-gambling-online-using-laptop_116547-19124.jpg"
                            section="NAROČNIŠKI PORTAL"
                            description="Prenovljen uporabniški portal za pregled vsebine"
                        />
                    </div>
                    <div className="col-span-2">
                        <PicCard
                            image="https://www.gostudy.rs/wp-content/uploads/2023/03/Sta-je-Internet_1-min.jpg"
                            section="FIKSNI INTERNET"
                            description="Nova ponudba in ugodne cene za vse uporabnike"
                        />
                    </div>
                </div>
                */}
        </div>);
}