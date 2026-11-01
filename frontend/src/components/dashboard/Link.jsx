import "../../index.css"

export default function Link({text, ico}){
    return(
        <a className="flex flex-row items-center gap-2 bg-black w-fit px-3 py-2 rounded-lg">
            <img src={ico} alt={text} width={20}/>
            <p className="font-bold text-white">{text}</p>
        </a>
    )
}