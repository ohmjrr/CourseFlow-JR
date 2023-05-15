import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Inter } from 'next/font/google'
// import { Flex, Spacer,Text } from '@chakra-ui/react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col">




      <section className="bg-[#E5ECF8]">
        <div className=" w-[1440px] mx-auto">
          <div className="flex  w-[1120px] h-[700px] mx-auto">
            {/* section1 */}
            <div className=" flex justify-between  mt-[165px]">
              <div className="w-[643px]">
                <h1 className="text-black text-[66px] font-[500]">
                  Best Virtual <br />
                  Classroom Software
                </h1>
                <p className="mt-[24px] text-[#646D89] text-[20px]">
                  Welcome to Schooler! The one-stop online class management
                  system that caters to all your educational needs!
                </p>
                <button className="font-[700] py-[18px] px-[32px] mt-[60px] bg-[#2F5FAC] text-white rounded-[12px] hover:bg-[#6991d5] transition-all duration-200">
                  Explore Courses
                </button>
              </div>

              <Image
                src="/hompage/computer.svg"
                className="rounded-[8px]"
                width={452}
                height={448}
              />
            </div>
          </div>
        </div>
      </section>






      {/* section2 */}
      <section className="w-[1120px] mx-auto">
        <div className="flex justify-between mt-[161px] w-full h-[330px] ">
          <Image
            src="/hompage/Frame 427320903.svg"
            className="rounded-[8px]"
            width={454}
            height={330}
          />
          <div className="flex flex-col w-[547px] h-full justify-between">
            <h1 className="text-[36px] font-[500]">
              Learning experience has been enhanced with new technologies
            </h1>

            <div>
              <div className="flex mb-[24px]">
                <Image src="/hompage/icon.svg" width={36} height={36} />

                <div className="ml-[24px]">
                  <h2 className="text-[24px] font-[500]">Secure & Easy</h2>
                  <p className="text-[#646D89]">
                    Duis aute irure dolor in reprehenderit in voluptate velit es
                    se cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <Image src="/hompage/icon (1).svg" width={36} height={36} />

                <div className="ml-[24px]">
                  <h2 className="text-[24px] font-[500]">Support All Student</h2>
                  <p className="text-[#646D89]">
                    Duis aute irure dolor in reprehenderit in voluptate velit es
                    se cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[120px] w-full h-[330px] ">
          
          <div className="flex flex-col w-[547px] h-full justify-between">
            <h1 className="text-[36px] font-[500]">
            Interaction between the tutor <br/> and the learners 
            </h1>

            <div>
              <div className="flex mb-[24px]">
                <Image src="/hompage/icon (2).svg" width={36} height={36} />

                <div className="ml-[24px]">
                  <h2 className="text-[24px] font-[500]">Purely Collaborative</h2>
                  <p className="text-[#646D89]">
                    Duis aute irure dolor in reprehenderit in voluptate velit es
                    se cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <Image src="/hompage/icon (1).svg" width={36} height={36} />

                <div className="ml-[24px]">
                  <h2 className="text-[24px] font-[500]">Support All Student</h2>
                  <p className="text-[#646D89]">
                    Duis aute irure dolor in reprehenderit in voluptate velit es
                    se cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <Image
            src="/hompage/Frame 427320903 (1).svg"
            className="rounded-[8px]"
            width={454}
            height={330}
          />
        </div>
      </section>

      <section className="w-[1120px] mx-auto mt-[275px]">
        <h1 className="text-center text-[36px] mb-[60px] font-[500]">Our Professional Intructor</h1>
        <div className="flex flex-row justify-around">
          
        <div className="w-[40%] h-[536px] bg-slate-200">
        <Image src="/1680519471715.jpg" width={500} height={536} />
        </div>
        <div className="w-[40%] h-[536px] bg-slate-200">
        <Image src="/1680519471715.jpg" width={500} height={536} />
        </div>
        </div>

      </section>




        <section className=" w-[1120px] mx-auto mt-[216px]">
        <Image
          src="/hompage/Frame 57044.svg"
          alt="Background Image"
          width={1440}
          height={500}
        />
      
        </section>

    </main>
    <Footer/>
    </>
    
  );
}
