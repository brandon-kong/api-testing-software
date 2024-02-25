import { Typography } from "..";

export default function TerminalMockup ()
{
    return (
        <div className={'w-full h-full bg-black rounded-lg p-4'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center space-x-2'}>
                    <div className={'h-3 w-3 bg-red-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-yellow-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-green-500 rounded-full'} />
                </div>
                <div className={'flex items-center space-x-2'}>
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                </div>
            </div>
            <div className={'flex items-center space-x-2'}>
                <Typography variant={'p-small'}>
                    user@host:~$
                </Typography>
            </div>
        </div>
    )
}