import Link from "./Link"
import ico from "../../assets/house.svg"

export default function SideNav(){
    return(
        <div className="flex flex-col justify-center w-80">
            <Link text={"Beranda"} ico={ico}/>
        </div>
    )
}