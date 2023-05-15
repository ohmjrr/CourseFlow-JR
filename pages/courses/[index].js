import Image from "next/image";
import { useRouter } from "next/router";

export default function CourseDetail() {
   const router = useRouter()

   const handleback = () =>{
    router.back()
   }
   
  return (
    <div className="max-w-screen-xl flex flex-col items-center mx-auto">
      <div onClick={handleback}>back</div>
      <div className=" flex">
        <div className=" w-[739px] flex flex-col mt-20">
          <div className="w-[739px] h-[460px] relative">
            <Image src="/1680519471715.jpg" layout="fill"/>
          </div>

          <div className=" flex flex-col">
            <h1>Course Detail</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              aenean fermentum, velit vel, scelerisque morbi accumsan. Nec,
              tellus leo id leo id felis egestas. Quam sit lorem quis vitae ut
              mus imperdiet. Volutpat placerat dignissim dolor faucibus elit
              ornare fringilla. Vivamus amet risus ullamcorper auctor nibh.
              Maecenas morbi nec vestibulum ac tempus vehicula.
            </p>
           <p>
              Vel, sit magna nisl cras non cursus. Sed sed sit ullamcorper
              neque. Dictum sapien amet, dictumst maecenas. Mattis nulla tellus
              ut neque euismod cras amet, volutpat purus. Semper purus viverra
              turpis in tempus ac nunc. Morbi ullamcorper sed elit enim turpis.
              Scelerisque rhoncus morbi pulvinar donec at sed fermentum. Duis
              non urna lacus, sit amet. Accumsan orci elementum nisl tellus sit
              quis. Integer turpis lectus eu blandit sit. At at cras viverra
              odio neque nisl consectetur. Arcu senectus aliquet vulputate urna,
              ornare. Mi sem tellus elementum at commodo blandit nunc. Viverra
              elit adipiscing ut dui, tellus viverra nec.
            </p>
            <p>
              Lectus pharetra eget curabitur lobortis gravida gravida eget ut.
              Nullam velit morbi quam a at. Sed eu orci, sociis nulla at sit.
              Nunc quam integer metus vitae elementum pulvinar mattis nulla
              molestie. Quis eget vestibulum, faucibus malesuada eu. Et lectus
              molestie egestas faucibus auctor auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
