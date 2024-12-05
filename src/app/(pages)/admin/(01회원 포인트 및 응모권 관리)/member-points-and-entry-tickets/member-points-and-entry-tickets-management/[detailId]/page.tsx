import CommonHeader from "@/components/CommonHeader"
import InputWithLabel from "@/components/InputWithLabel"

const page = () => {
  const labelStyle = "font-bold text-base text-mainBlack min-w-[130px]"
  return (
    <section>
      <CommonHeader title="포인트 상세정보" />

      <div className="bg-white py-5 px-10 rounded-[20px] ">
        <div className="flex items-center justify-between  w-full">
          <InputWithLabel label="이름" labelStyles={`${labelStyle}`} inputStyles="w-[400px]" />
          <InputWithLabel label="아이디" labelStyles={`${labelStyle}`} inputStyles="w-[400px]" />
        </div>
        <div className="mt-6 w-full"> 
        <InputWithLabel label="CI" labelStyles={`${labelStyle}`} inputStyles=""  />
        </div>
        <div className=" mt-6 flex items-center justify-between  w-full">
          <InputWithLabel label="총 지급 포인트" labelStyles={`${labelStyle}`} inputStyles="w-[px]" />
          <InputWithLabel label="총 사용 포인트" labelStyles={`${labelStyle}`} inputStyles="w-[px]" />
          <InputWithLabel label="포인트 잔액" labelStyles={`${labelStyle}`} inputStyles="w-[px]" />

        </div>
      </div>
    </section>
  )
}

export default page