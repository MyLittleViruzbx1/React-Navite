
export const BasicTypes = () => {

    const nombre: string = 'myz';
    const age:number = 21;
    const isActive: boolean = true;
    const powers: string[] = ['React','ReactNative','Angular','Vue'];

    powers.push('Nest');
    powers.push('Next');
    
    return (
        <>
    <h3>Tipos basicos</h3>
    {nombre} {age} {isActive} 
    <br />
    {powers.join(', ')}
    </>
  )
}
