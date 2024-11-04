
const Button = ({ onClick, text}) => {
    return ( 
        <button onClick={onClick} class="rounded bg-zinc-50 text-black px-10 py-1">
        {text}
        </button> );
}

export default Button;