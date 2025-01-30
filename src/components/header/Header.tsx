"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

const Header = () => {
    const [title, setTitle] = useState('CodarSe');
    const [drawer, setDrawer] = useState(true);
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    return (
        <nav className="bg-primary py-3 sm:py-4 flex justify-start items-center px-4 sm:px-0 sm:justify-center">
            <button className="sm:hidden mr-3">
                <MdMenu size={24} onClick={() => setDrawer(true)} />
            </button>

            <div 
                data-open={drawer}
                onClick={() => setDrawer(false)}
                className="fixed left-0 top-0 right-0 h-full bg-gradient-to-r from-background transition-transform data-[open=false]:-translate-x-full">
                <ul className="flex-col sm:hidden p-4 gap-5 bg-background w-60 h-full" onClick={(e) => e.stopPropagation()}>
                    <li><Link data-active={currentPath === "/"} className="data-[active=true]:underline" href="/">Home</Link></li>
                    <li><Link data-active={currentPath === "/cursos"} className="data-[active=true]:underline" href="/cursos">Cursos</Link></li>
                    <li>
                        <Link  href="/" className="flex items-center gap-1">
                            Blog
                            <MdOutlineOpenInNew />
                        </Link>
                    </li>
                </ul>
            </div>


            <Link href="/" className="border-2 rounded-md py-2 px-3 no-underline hover:no-underline mr-4">CODARSE</Link>
            <ul className="p-4 gap-5 hidden sm:inline-flex sm:ml-2">
                <li><Link data-active={currentPath === "/"} className="data-[active=true]:underline" href="/">Home</Link></li>
                <li><Link data-active={currentPath === "/cursos"} className="data-[active=true]:underline" href="/cursos">Cursos</Link></li>
                <li>
                    <Link  href="/" className="flex items-center gap-1">
                        Blog
                        <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>
            <h1 className="sm:hidden">{title}</h1>
        </nav>
    );
};

export default Header;