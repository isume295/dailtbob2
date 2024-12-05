import CommonHeader from "@/components/CommonHeader";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const page = () => {
  const labelStyle = "font-bold text-base text-mainBlack min-w-[70px]";
  return (
    <section>
      <CommonHeader title="포인트 상세정보" />

      <header className="bg-white py-5 px-10 rounded-[20px] flex items-center justify-between gap-8">
        <div className="w-full">
          <div className="flex items-center gap-14 w-full">
            <div className="w-full">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
            <div className="w-full">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
          </div>
          <div className="mt-5 w-1/2">
            <InputWithLabel label="아이디" labelStyles={`${labelStyle}`}  />
          </div>
        </div>
        <div>
          <Button className="bg-mainBlack py-3 px-20 text-white rounded-md">검색</Button>
        </div>
      </header>

      <div className="bg-white py-5 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-2">
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white">포인트 지급</Button>
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white">엑셀 다운로드</Button>
          </div>
        </header>

        <article></article>

      </div>
    </section>
  );
};

export default page;
