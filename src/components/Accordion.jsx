import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import { Faq } from "../constants";

const Accordion = () => {
  return (
    <div className="w-full p-10">
      <div className="mx-auto w-full rounded-2xl  p-2 flex justify-around items-start gap-10 flex-wrap ">
        {Faq.map((item, index) => (
          <Disclosure
            as="div"
            className="my-5 w-full md:w-[40%] self-start"
            key={index}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span className="text-white w-fit border-b-2 border-white">
                    {item.question}
                  </span>
                  <IoIosArrowDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className="px-4 pb-2 pt-4 text-sm text-white/55
                 w-fit border-b-2 border-white flex flex-shrink-0"
                >
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
