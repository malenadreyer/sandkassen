
const Button = ({setIsCookieAccepted, IsCookieAccepted, text}) => {
    
    return ( 
        <button onClick={() => setIsCookieAccepted(!IsCookieAccepted)} class="rounded bg-zinc-50 text-black px-10 py-1">
        {text}
        </button> );
}

export default Button;