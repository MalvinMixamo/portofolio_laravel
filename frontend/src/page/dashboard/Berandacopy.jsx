import SideNav from "../../components/dashboard/SideNav"
import bg from "../../assets/bg.jpg"
import profil from "../../assets/profil.png"
import edit_pen from "../../assets/edit-pen.svg"
import instagram from "../../assets/sosial/instagram.svg"
import linkedin from "../../assets/sosial/linkedin.svg"
import github from "../../assets/sosial/github.svg"

export default function Dashboard({nama = "Malvin Pradhypta Eka Saputra", deskripsi = "saya adalah seorang Fullstack Developer bla bla bla bla..."}){
    return(
        <div className="h-screen flex flex-row items-center">
            <img src={bg} alt="" className="w-screen -z-10 fixed h-screen"/>
            <SideNav active={"beranda"}/>

            <section className="grid grid-cols-8 grid-rows-6 gap-3 h-11/12">
                <div className="bg-slate-900/65 col-span-2 row-span-2 backdrop-blur-lg flex flex-col gap-2 px-4 py-5 items-center justify-center overflow-hidden rounded-lg">
                    <div className="flex flex-row justify-center gap-5">
                        <h1 className="text-2xl font-bold text-white ">Foto Profil</h1>
                        <button className="cursor-pointer">
                            <img src={edit_pen} alt="edit" />
                        </button>
                    </div>
                    <div className=" overflow-hidden relative rounded-full border-2 aspect-square border-blue-400 bg-yellow-600">
                        <img className="-translate-y-3" src={profil} alt="" width={200} />
                    </div>
                </div>

                <div className="grid grid-rows-2 col-span-2 row-span-2 gap-3">
                    <div className="bg-slate-900/65 text-white flex flex-row items-center gap-5 backdrop-blur-lg px-4 py-6 rounded-lg h-full">
                        <h1 className="font-bold text-3xl">{nama}</h1>
                        <button className="cursor-pointer">
                            <img src={edit_pen} alt="edit" />
                        </button>
                    </div>
                    <div className="bg-slate-900/65 text-white flex flex-row items-center gap-5 backdrop-blur-lg px-4 py-6 rounded-lg h-full">
                        <p>{deskripsi}</p>
                        <button className="cursor-pointer">
                            <img src={edit_pen} alt="edit" />
                        </button>
                    </div>

                </div>
                <div className="bg-slate-900/65 text-white flex flex-row gap-5 backdrop-blur-lg px-4 py-6 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">Sosial</h1>
                        <div className="flex flex-row items-center gap-1">
                            <a href="">
                                <img src={instagram} alt=""  width={25} height={25} />
                            </a>
                            <a href="">
                                <img src={linkedin} alt=""  width={30} height={30} />
                            </a>
                            <a href="">
                                <img src={github} alt=""  width={25} height={25} />
                            </a>
                        </div>
                    </div>
                    <button className="cursor-pointer">
                        <img src={edit_pen} alt="edit" />
                    </button>
                </div>
                <div className="">      
                </div>
                <div className="flex flex-row gap-2">

                </div>
            </section>
            
        </div>
    )
}