import SideNav from "../../components/dashboard/SideNav"
import bg from "../../assets/bg.jpg"
import profil from "../../assets/profil.png"
import edit_pen from "../../assets/edit-pen.svg"
export default function Dashboard({nama = "Malvin Pradhypta Eka Saputra", deskripsi = "saya adalah seorang Fullstack Developer bla bla bla bla..."}){
    return(
        <div className="h-screen flex flex-row items-center">
            <img src={bg} alt="" className="w-screen -z-10 fixed h-screen"/>
            <SideNav active={"beranda"}/>

            <section className="flex flex-col gap-3 h-11/12">
                <div className="flex flex-row gap-2">
                    <div className="bg-slate-900/65 backdrop-blur-lg w-72 h-72 flex flex-col gap-2 px-4 py-5 items-center justify-center overflow-hidden rounded-lg">
                        <div className="flex flex-row justify-center gap-5">
                            <h1 className="text-2xl font-bold text-white">Foto Profil</h1>
                            <button className="cursor-pointer">
                                <img src={edit_pen} alt="edit" />
                            </button>
                        </div>
                        <div className="h-52 overflow-hidden relative rounded-full border-2 border-blue-400 bg-yellow-600">
                            <img className="-translate-y-3" src={profil} alt="" width={200} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="bg-slate-900/65 text-white flex flex-row gap-5 backdrop-blur-lg px-4 py-6 rounded-lg h-fit">
                            <div className="flex flex-col">
                                <p className="text-blue-400 font-bold text-2xl">Nama :</p>
                                <h1 className="font-bold text-3xl">{nama}</h1>
                                <p className="text-blue-400 font-bold mt-4 text-2xl">Tentang :</p>
                                <p>{deskripsi}</p>
                            </div>
                            <button className="cursor-pointer">
                                <img src={edit_pen} alt="edit" />
                            </button>
                        </div>
                        
                        <div className="bg-slate-900/65 text-white flex flex-row gap-5 backdrop-blur-lg px-4 py-6 rounded-lg h-fit">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-2xl">Sosial</h1>
                                <p>{deskripsi}</p>
                            </div>
                            <button className="cursor-pointer">
                                <img src={edit_pen} alt="edit" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}