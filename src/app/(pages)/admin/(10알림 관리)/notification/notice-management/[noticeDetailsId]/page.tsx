"use client";
import CommonHeader from "@/components/CommonHeader";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef } from "react";

const page = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };
  return (
    <section>
      <CommonHeader title="공지사항 관리" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-8">
          <p className="font-bold text-mainBlack min-w-[41px]">작성일</p>
          <p className="text-sm text-grayLight">YYYY-MM-DD</p>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className="font-bold text-mainBlack min-w-[41px]">제목</p>
          <p className="text-sm text-grayLight">공지사항 제목 영역입니다.</p>
        </div>
        <div className="w-full min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-mainBlack">내용</p>
          <div className="w-full mt-8">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-10">
        <Button className="py-3 px-8 bg-mainBlack text-white">  <Link href="/admin/notification/notification-management/notice-management/1/1"> 수정</Link></Button>
      </div>
    </section>
  );
};

export default page;
