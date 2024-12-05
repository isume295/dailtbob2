"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const page = () => {
  // Dummy data for the dropdown
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];

  return (
    <section>
      <CommonHeader title="포인트 지급" />
      <div className="bg-white py-5 px-10 rounded-[20px]">
        <div className="flex items-center justify-between">
          <DropDownWithLabel
            title="대상 회원"
            options={dropDownOptions}
            defaultSelectedKeys="option1"// Default selected key
          />
          <div className="flex items-center justify-center gap-4">
            <InputWithLabel label="대상 회원"/>
            <Button>검색</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;