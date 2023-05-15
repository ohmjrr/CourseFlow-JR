import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();

    const navigateLogin = () => {
        router.push("/login")
    }

    const navigateHome = () => {
        router.push("/")
    }
  return (
    <header className="font-nunito relative z-30 w-screen shadow-md bg-[#183056] h-[240px] ">
      <div className="w-screen flex flex-row items-center py-5 mx-auto">
      <Image
                src="/hompage/CourseFlow.svg"
                className="rounded-[8px] ml-[12%] hover:cursor-pointer"
                width={140}
                height={16}
                onClick={navigateHome}
              />
        <nav className="mr-[12%] ">
          <ul className="flex flex-row items-center">
            <li className=" mr-[56px] text-[#C8CCDB] font-[400]">
            All Course
            </li>
            <li className=" mr-[56px] text-[#C8CCDB] font-[400]">
            Bundle Package
            </li>
            <Image
                src="/hompage/fb.svg"
                className="rounded-[8px]  hover:cursor-pointer"
                width={48}
                height={48}
              />
               <Image
                src="/hompage/ig.svg"
                className="rounded-[8px] hover:cursor-pointer"
                width={48}
                height={48}
              />
               <Image
                src="/hompage/tw.svg"
                className="rounded-[8px] hover:cursor-pointer"
                width={48}
                height={48}
              />
              
          </ul>
        </nav>
      </div>
    </header>
  );
}

