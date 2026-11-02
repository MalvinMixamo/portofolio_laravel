import '../../index.css';
import Link from "./Link";
import ico from "../../assets/house.svg";
import project from "../../assets/folder-git-2.svg"

export default function SideNav({active}){

    const is_active = active

    return(
        <div className="flex flex-col gap-2 bg-slate-900/65 rounded-lg backdrop-blur-lg rotate-x-5 -rotate-y-15 w-fit px-7 py-8 h-11/12 ml-8 transition-all duration-300 ease-in-out">
            <Link className={`${is_active == "beranda" ? "bg-blue-400" : "bg-white/25"}`} text={"Beranda"} ico={ico} to={"/dashboard/beranda"}/>
            <Link className={`${is_active == "project" ? "bg-blue-400" : "bg-white/25"}`} text={"Projek"} ico={project} to={"/dashboard/project"}/>
            <Link className={`${is_active == "web" ? "bg-blue-400" : "bg-white/25"}`} text={"Web"} ico={ico} to={"/dashboard/web"}/>
            <Link className={`${is_active == "cv" ? "bg-blue-400" : "bg-white/25"}`} text={"Cv"} ico={ico} to={"/dashboard/cv"}/>
        </div>
    )
}