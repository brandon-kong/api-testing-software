import Typography from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image draggable={false} src={'/backgrounds/grid.png'} alt={'background'} fill  
      className={'absolute w-full h-full opacity-10 select-none '}
      />
    </main>
  );
}
