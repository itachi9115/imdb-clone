import Link from "next/link"
import { IconType } from "react-icons/lib/esm/iconBase"

interface PropsMenu{
    title: string,
    address: string,
    icon: IconType
}
export default function MenuItem(props: PropsMenu) :React.ReactElement<PropsMenu> {
    const { title, address} = props

    
    return(
   <div>
   <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
    <props.icon className="text-2xl sm:hidden mx-4"/>
    <p className="hidden sm:inline my-2 text-sm">{title}</p>
   </Link>
   </div>
    )
}