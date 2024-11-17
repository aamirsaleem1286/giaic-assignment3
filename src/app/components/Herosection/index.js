// components/Hero.js
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
    <section className="flex items-center justify-between px-6 py-20 bg-[#043873]">
      {/* Text on the left */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
        Get More Done with whitepace       </h1>
        <p className="text-lg text-white mb-6">
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks        </p>
        <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      <div className="hidden lg:block w-1/2 h-96 bg-[#C4DEFD] rounded-lg shadow-lg"></div>

    </section>
    
    <section className="flex items-center justify-between px-6 py-20 bg-[#043873]">
      {/* Text on the left */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
        Use as Extension       </h1>
        <p className="text-lg text-white mb-6">
        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      <div className="hidden lg:block w-1/2 h-96 bg-[#C4DEFD] rounded-lg shadow-lg"></div>

    </section>
      
    <section className="flex items-center justify-between px-6 py-20 bg-white">
    <div className="hidden lg:block w-1/2 h-96 bg-[#C4DEFD] rounded-lg shadow-lg"></div>

      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-black mb-4">
        Customise it
to your needs      </h1>
        <p className="text-lg text-black mb-6">
        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.        </p>
        <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>


    </section>
       
    
    
    <section className="flex items-center justify-center px-6 py-20 bg-[#043873]">
      {/* Text on the left */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
        Your work, everywhere you are</h1>
        <p className="text-lg text-white mb-6">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!        </p>
        <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>


    </section>
    





    <section className="px-6 py-20">
  {/* Heading centered */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-black">Our Sponsors</h1>
  </div>

  {/* Image container with images in a row */}
  <div className="flex justify-between gap-10 mx-auto w-full max-w-6xl">
    <Image src="/Apple.png" alt="Apple logo" width={40} height={40} />
    <Image src="/Google.png" alt="Google logo" width={100} height={100} />
    <Image src="/Slack.png" alt="Slack logo" width={100} height={100} />
    <Image src="/Microsoft.png" alt="Microsoft logo" width={100} height={100} />
  </div>
</section>






    </>
  )
}

export default HeroSection
