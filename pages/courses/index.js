import React from "react";
import mock from "@/mockdata/mock";
import Image from "next/image";
import Link from "next/link";


export default function Courses() {
  return (
    <section className="max-w-screen-xl flex flex-col items-center mx-auto">
      <div className="mt-14 text-3xl font-semibold">Our Courses</div>
      <input w="357px" borderColor="gray.500" mt={14}></input>

      <div className=" grid grid-cols-3 mt-20 gap-4 gap-y-10 ">
        {mock.map((item, index) => {
          return (
            <Link href={"/courses/" + index}>
              <figure
                className="w-[357px] h-[475px] flex flex-col rounded-md overflow-hidden shadow-lg "
                key={index}
              >
                <Image src={item.image} width={357} height={240} />
                <figcaption className="flex flex-col mt-4 ml-3 w-[357px] h-[131px]">
                  <p className=" text-base font-normal text-orange-500 ">
                    Course
                  </p>
                  <p className="text-lg font-medium ">
                    Service Design Essentials
                  </p>
                  <p className=" font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                  </p>
                </figcaption>
                <div className="flex flex-row w-[357px] h-[56px] items-center border-t-2 border-gray.300">
                  <p className=" ml-3">6 Lesson</p>
                  <p className="">6 Lesson</p>
                </div>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
