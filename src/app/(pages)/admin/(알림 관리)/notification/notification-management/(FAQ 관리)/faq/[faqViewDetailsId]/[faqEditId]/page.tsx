import CommonHeader from "@/components/CommonHeader";
import { Button, Textarea } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <section>
      <CommonHeader title="FAQ 수정하기 " />
      <header className="bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex gap-8">
          <p className="font-bold min-w-[40px]">질문</p>
          <Textarea
            className="max-w-6xl bg-white "
            label="Q. 질문 텍스트 영역입니다."
          />
        </div>
        <div className="flex gap-8 mt-10">
          <p className="font-bold min-w-[40px]">답변</p>
          <Textarea
            className="max-w-6xl bg-white "
            label="A. 답변 텍스트 영역입니다.."
          />
        </div>
      </header>
      <div className="flex items-center justify-center mt-10">
        <Button className="py-3 px-8 bg-mainBlack text-white">확인</Button>
      </div>
    </section>
  );
};

export default page;
