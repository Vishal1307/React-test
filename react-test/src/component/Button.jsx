import "./Button.css"
export const Button=({children,colorChange,onClick,variant})=>{
    return <button data-testid="cButton" className={`btn ${colorChange || "red"} ${variant}`} onClick={onClick}>{children}</button>
}