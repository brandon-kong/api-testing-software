import Typography from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
       <div
          id={'background'}
          className={'absolute h-[853px] w-full'}
          >
            <div
            className={'relative h-full w-full'}
            >
               <div className={'blob h-1/2 w-1/2'} />
              <Image draggable={false} src={'/backgrounds/grid2.webp'} alt={'background'} fill  
              className={'absolute w-full opacity-70 select-none'}
              />
            </div>
           
          </div>
      <div
      id={'main'}
      className={'pt-42'}
      >

      
        <div
        className={'relative pt-44 h-[853px] flex items-center justify-center text-white'}
        >
          <div
          className={'flex flex-col space-y-4 max-w-4xl'}
          >
            <Typography variant={'subtitle'}
            className={'text-lg'}
            >
              API Testing Made Easy
            </Typography>
            <Typography variant={'landing'}>
              Unmatched scale
              and performance
            </Typography>
            <Typography variant={'p-large'}
            className={'text-secondary-500'}
            >
              We provide a simple and easy to use API testing tool that allows you to test your APIs with ease. We offer a wide range of features that allow you to test your APIs with ease.
            </Typography>
          </div>

          <div
          className={'w-full h-full flex items-center justify-center max-w-lg'}
          >
            <Image draggable={false} src={'/illustrations/undraw_code_inspection.svg'} alt={'code review'}
            height={500}
            width={500}
            className={'w-full h-full object-contain select-none'}
            />
          </div>
          
          
        </div>
      </div>
      
    </main>
  );
}
