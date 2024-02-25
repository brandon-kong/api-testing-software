import { Button, Divider } from "@/components";
import Typography from "@/components/typography";
import Image from "next/image";

export default function Navbar ()
{
    return (
        <header className="rounded-full my-6 max-w-content-width mx-auto h-navbar-height text-white flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Image src="/brand/logo-with-text.svg" alt="logo" width={30} height={30}
                className={'h-6 w-auto'}
                />
                <Divider variant={'vertical'} />

                <nav>
                    <ul className="flex items-center space-x-4 font-semibold text-neutral-400">
                        <li>
                            <Typography variant={'p-small'}>Home</Typography>
                        </li>
                        <li>
                            <Typography variant={'p-small'}>About</Typography>
                        </li>
                        <li>
                            <Typography variant={'p-small'}>Features</Typography>
                        </li>
                        <li>
                            <Typography variant={'p-small'}>Pricing</Typography>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <Button variant={'primary'}>Sign Up</Button>
            </div>

            
        </header>
    )
}