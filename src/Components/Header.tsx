import MenuItem from "./MenuItem"
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';
export default function Header() :React.ReactElement {
    return(
        <>
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
<MenuItem title='Home' address='/' icon={AiFillHome} />
<MenuItem title='About' address='/about' icon={BsFillInfoCircleFill} />
            </div>
            <div className="">
                <Link href='/'>
                    <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded mr-1">IMDB</span><span className="text-xl hidden sm:inline">Clone</span></h2>
                </Link>
            </div>
         
        </div></>
    )
}