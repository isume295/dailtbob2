import CommonHeader from "@/components/CommonHeader";
import { Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <section>
      <CommonHeader title="1:1문의 상세보기" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-10 w-full">
            <p className="font-bold min-w-[75px]">질문자</p>
            <div className="w-full">
              <p className="text-sm w-full text-grayLight">닉네임</p>
            </div>
          </div>
          <div className="flex items-center gap-8 w-full">
            <p className="font-bold min-w-[75px]">질문 날짜</p>
            <div className="w-full">
              <p className="text-sm w-full text-grayLight">YYYY-MM-DD </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10 w-full mt-8 ">
          <p className="font-bold min-w-[75px]">상태</p>
          <div className="w-full">
            <div className="w-14 h-6 bg-[#F0F7FF]"></div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center gap-5 mt-10">
        <Button className="py-3 px-10 bg-mainBlack text-white">등록</Button>
        <Button className="py-3 px-10 bg-grayLight text-white">삭제</Button>
      </div>
    </section>
  );
};

export default page;
