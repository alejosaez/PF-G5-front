'use client'
import { CiLocationOn, CiPhone, CiMail, CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci"

const Footer: React.FC = () => {

  return (
    <footer className={` bg-white border-t border-slate-200 desktop:py-8 desktop:px-[124px] mobile:py-8 mobile:px-16 text-left`}>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-[#05264E] mb-4 desktop:text-start mobile:text-center">
            GoHire
          </h3>
          <div className="text-gray-600 mb-4">
            <a href="#" className="inline-block mr-4 hover:text-[#05264E]">
              Home <span className="ml-1">|</span>
            </a>
            <a href="#" className="inline-block mr-4 hover:text-[#05264E]">
              Assistance <span className="ml-1">|</span>
            </a>
            <a href="#" className="inline-block hover:text-[#05264E]">
              Contact
            </a>
          </div>
          <p className="text-gray-600 desktop:text-start mobile:text-center">GoHire Company © 2024</p>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <CiLocationOn className="text-zinc-600 mr-2 text-2xl" />
            <p className="text-gray-600">
              <span className="text-[#05264E]">444 S. Cedros Ave</span> Solana Beach,
              California
            </p>
          </div>
          <div className="flex items-center mb-4">
            <CiPhone className="text-zinc-600 mr-2 text-2xl" />
            <p className="text-gray-600">+1.555.555.5555</p>
          </div>
          <div className="flex items-center">
            <CiMail className="fas fa-envelope text-zinc-600 mr-2 text-2xl" />
            <p className="text-gray-600">
              <a href="mailto:support@company.com" className="text-zinc-600 hover:text-teal-700">
                support@company.com
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 desktop:text-start mobile:text-center">
          <p className="text-gray-700 mb-4">
            <span className="text-[#05264E] font-bold">About the company</span>
            <br />
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
            convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="flex desktop:justify-start mobile:justify-center">
            <a href="#" className="mr-4 text-gray-600 hover:text-[#05264E]">
              <CiFacebook className="text-2xl text-zinc-600" />
            </a>
            <a href="#" className="mr-4 text-gray-600 hover:text-[#05264E]">
              <CiTwitter className="text-2xl text-zinc-600" />
            </a>
            <a href="#" className="mr-4 text-gray-600 hover:text-[#05264E]">
              <CiLinkedin className="text-2xl text-zinc-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer