import "../../index.css"

export default function Link({text, ico, to, className}){
    return(
        <a href={to} className={`flex flex-row items-center gap-2 w-52 hover:bg-white/40 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${className}`}>
            <img src={ico} alt={text} width={20}/>
            <p className="font-bold text-white">{text}</p>
        </a>
    )
}