import Pagina from "@/app/components/template/Pagina"
import Titulo from "../../components/template/Titulo"
import { IconUser } from "@tabler/icons-react"
import ListaUsuarios from "../../components/usuarios/ListaUsuario"

export default function page(){
   return(
    <Pagina className="flex flex-col gap-10">
      
    <Titulo icone={IconUser} principal="Usuarios" secundario="Cadastro de usuario"/>
   
    <ListaUsuarios/>
  </Pagina>
   )
}