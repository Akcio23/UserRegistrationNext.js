import { ElementType } from "react"
import Link from "next/link"

export interface MenuItemProps{
    icone:ElementType,
    texto: string,
    url:string
}
export default function MenuItem(props: MenuItemProps){
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
        <props.icone className="tx-zinc-200"size={24} stroke={1}/>
        <span className="tx-zinc-200">{props.texto}</span>
        </Link>
    )
}