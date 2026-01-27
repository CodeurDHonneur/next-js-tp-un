

export default function troncateStr(str: string){
    return str.length > 50 ? str.slice(0, 50) + "..." : str;
} 