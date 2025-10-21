import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <p className="py-2 text-xl font-bold text-black">🌟 Why This URL Shortener?</p>
          <p className="text-center px-12 text-gray-800">We are the most straight-forward URL shortener in the world. Most of the URL shortener will ask for your credentials for login. We understand your needs and hence we have created BitLinks.</p>
          <div className="py-5 text-white">
            <Link href={"/shorten"}><button className='font-bold bg-emerald-400 rounded-lg p-1 px-2 shadow-xl'>Try Now!</button></Link>
          </div>
        </div>
        <div className="pr-10">
          <Image className="mix-blend-darken" src={"/vector3.avif"} alt="vector" width={900} height={900} />
        </div>
      </section>

      <section className="grid grid-cols-2">
        <div className="pl-10">
          <Image className="mix-blend-darken" src={"/vector7.avif"} alt="vector" width={600} height={600} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="py-2 text-xl font-bold text-black">🤝 Let's Build Together</p>
          <p className="text-center px-12 text-gray-800">Check out the repo, experiment, and help us improve it for the community. Your contributions and feedback are always welcome!</p>
          <div className="py-5 text-white">
            <Link href={"/github"}><button className='font-bold bg-emerald-400 rounded-lg p-1 px-2 shadow-xl'>Github</button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}