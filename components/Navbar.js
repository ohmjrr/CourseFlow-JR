import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const navigateLogin = () => {
        router.push("/login")
    }

    const navigateHome = () => {
        router.push("/")
    }
  return (
    <header className="relative z-30 w-screen shadow-md">
      <div className="w-screen flex flex-row justify-between items-center py-5 mx-auto">
      <Image
                src="/hompage/CourseFlow.svg"
                className="rounded-[8px] ml-[12%] hover:cursor-pointer"
                width={140}
                height={16}
                onClick={navigateHome}
              />
        <nav className="mr-[12%] ">
          <ul className="flex flex-row items-center">
            <li className=" mr-[56px] text-[#191C77] font-[700] hover:text-[#191C77]">
            Our Courses
            </li>
            
              <button onClick={navigateLogin} className="bg-[#2F5FAC] hover:bg-[#6991d5] transition-all duration-200 text-white font-bold  rounded-[12px] w-[112px] h-[60px] ">
                Log In
              </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

