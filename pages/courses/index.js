import React from "react";
import mock from "@/mockdata/mock";
import { Flex, Spacer, Text, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <section className="max-w-screen-xl flex flex-col items-center mx-auto">
      <div className="mt-14 text-3xl font-semibold">Our Courses</div>
      <Input w="357px" borderColor="gray.500" mt={14}></Input>

      <div className=" grid grid-cols-3 mt-20 gap-4 ">
        {mock.map((item, index) => {
          return (
            <Link href={"/courses/" + index}>
              <div
                className="w-[357px] h-[475px] flex flex-col rounded-md overflow-hidden border-2 border-red-500 "
                key={index}
              >
                <Image src={item.image} width={357} height={240} />
                <div className="flex flex-col mt-4 ml-3">
                  <div className=" border-2 border-black">
                    <p className=" text-base font-normal text-orange-500 ">
                      Course
                    </p>
                    <p className="text-lg font-medium ">
                      Service Design Essentials
                    </p>
                    <p className=" font-medium text-gray-500">
                      Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    </p>
                  </div>
                  <div className="">
                  <p className="">6 Lesson</p>
                  <p className="">6 Lesson</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
