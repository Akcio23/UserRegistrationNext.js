import { Usuario } from "@/core/model/usuario"
import usuarios from "../../data/constants/usuarios"
import LinhaUsuario from "./LinhaUsuario"

export default function ListaUsuarios(){
    return(
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuario)=>{
                return <LinhaUsuario key={usuario.id} usuario={usuario}/>
                 
               
            })}
        </div>
    )
}