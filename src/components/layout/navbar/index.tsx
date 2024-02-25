import { Button, Divider } from "@/components";
import Typography from "@/components/typography";
import Image from "next/image";

const navItems = [
    'Home',
    'About',
    'Features',
    'Pricing',
]
export default function Navbar ()
{
    return (
        <header className="z-50 fixed top-0 left-1/2 -translate-x-1/2 w-full rounded-full my-6 max-w-content-width mx-auto h-navbar-height text-white flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Image src="/brand/logo-with-text.svg" alt="logo" width={30} height={30}
                className={'h-6 w-auto'}
                />
                <Divider variant={'vertical'} />

                <nav>
                    <ul className="flex items-center space-x-4 font-semibold text-neutral-400">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Button variant={'text'}>{item}</Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            <div
            className={'space-x-2'}
            >
                <Button variant={'ghost'}>Login</Button>
                <Button variant={'primary'}>Waitlist</Button>
            </div>

            
        </header>
    )
}