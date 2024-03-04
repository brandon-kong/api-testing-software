import { Button, Input } from "@/components";
import LoginModal from "@/components/login-modal";
import Typography from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
       <div
          id={'background'}
          className={'absolute h-[800px] w-full'}
          >
            <div
            className={'relative h-full w-full'}
            >
               <div className={'absolute blob w-full h-full opacity-30'} />
               <div className={'w-full h-[100px] opacity-60 bg-gradient-to-b from-black to-transparent'} />
              <Image draggable={false} src={'/backgrounds/grid2.webp'} alt={'background'} fill  
              className={'absolute w-full opacity-70 select-none object-cover'}
              />
            </div>
           
          </div>
      <div
      id={'main'}
      className={'pt-42'}
      >


        
        <div
        className={'mx-auto relative pt-[185px] h-[853px] flex items-start justify-center text-secondary-100 max-w-content-width'}
        >
          <div
          className={'flex items-center justify-between w-full h-auto'}
          >
            <div
            className={'flex flex-col gap-4 flex-1 w-full items-start justify-center'}
            >
              <Typography variant={'subtitle'}
              className={'text-lg'}
              >
                API Testing Made Easy
              </Typography>
              <Typography variant={'landing'}>
                Unmatched scale
                and security
              </Typography>
              <Typography variant={'p-large'}
              className={'text-secondary-500 max-w-xl'}
              >
                We provide a simple and easy to use API testing tool that allows you to test your APIs at scale and with the highest level of security.
              </Typography>

              <form
              className={'mt-4 flex rounded-full border border-secondary w-full max-w-md p-1 pl-8 h-14'}
              >
                <Input
                autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                variant={'unstyled'} name={'email'} size={'lg'} type={'email'} placeholder={'name@email.com'}
                className={'h-full w-full'}
                />

                <Button 
                href={'/signup'}
                variant={'primary'}
                
                className={'h-full w-full max-w-[150px]'}
                >
                  Get Started
                </Button>
              </form>
            </div>

            <div
            className={'pt-16 w-full h-full max-w-sm flex items-start justify-center'}
            >
              <Image draggable={false} src={'/illustrations/blocks.webp'} alt={'code review'}
              height={280}
              width={280}
              className={'w-full object-contain select-none'}
              />

            </div>
          </div>
        
          
          
        </div>
      </div>
      <Typography variant={'h1'} >
        Hello World
      </Typography>
      <Typography variant={'h2'} >
        Hello World
      </Typography>
      <Typography variant={'h3'} >
        Hello World
      </Typography>
      <Typography variant={'h4'} >
        Hello World
      </Typography>
      <Typography  >
        Testing testing body text
      </Typography>
      
    </main>
  );
}
