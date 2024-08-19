import { Usuario } from "@/core/model/usuario"
import Image from "next/image"

export interface LinhaUsuarioProps{
    usuario:Usuario
}
export default function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer">
            <Image 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={80}
            height={80}
            className="rounded-full"
            alt= "Avatar" 
            />

         <div className="flex flex-col"> 
            <span className="text-xl font-black">{props.usuario.nome}</span>
            <span className="text-sm text-zinc-400">{props.usuario.email}</span>
         </div>
        

        </div>
    )
}