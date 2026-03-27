import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={100}
          height={20}
          priority
        />
        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left pt-8'>
          <p>
            Welcome to Renewably UK, your gateway to a greener future. We are
            dedicated to powering the United Kingdom with renewable energy
            solutions. Explore our services and join us in making a positive
            impact on the environment. Together, we can create a sustainable
            future for generations to come.
          </p>
        </div>
      </main>
    </div>
  );
}
