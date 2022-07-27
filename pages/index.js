import Head from "next/head"
import Footer from "../components/Footer"

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const Home = () => {
  return (
   <>
   <Head>
    <title>Next.js + TailwindCSS + DaisyUI</title>
   </Head>
    <div className='w-full'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="ml-auto mr-auto">
              <h1 className="text-3xl font-bold whitespace-nowrap text-left drop-shadow-2xl">Next.js + <span className='text-[#38bdf8] drop-shadow-2xl'>TailwindCSS</span> + <span className='text-[#720aec] drop-shadow-2xl'>DaisyUI</span></h1>
            </div>
            <p className="py-6">Check out their respectative document here.</p>
            <div className="grid-cols-3">
              <button className="btn btn-black mx-2" onClick={() => openInNewTab('https://nextjs.org')}>Next.js</button>
              <button className="btn bg-[#38bdf8] mx-2 border-transparent" onClick={() => openInNewTab('https://tailwindcss.com')}>TailwindCSS</button>
              <button className="btn bg-[#720aec] mx-2 border-transparent" onClick={() => openInNewTab('https://daisyui.com')}>DaisyUI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Home