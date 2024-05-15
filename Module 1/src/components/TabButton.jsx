export default function TabButton({children, onSelect, isSelected}){
   
    return(<button onClick={onSelect} 
        className={isSelected ? "active" : undefined}>{children}</button>);
}