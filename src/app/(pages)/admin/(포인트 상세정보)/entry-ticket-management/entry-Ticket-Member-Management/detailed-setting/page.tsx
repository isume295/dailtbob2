
import CommonHeader from "@/components/CommonHeader"
import InputWithLabel from "@/components/InputWithLabel"
const page = () => {
    
  return (
    <section>
        <CommonHeader title="세부 설정"/>
        <div className="bg-white py-10 px-10 rounded-[20px] ">
            <div className="flex items-center justify-center mb-7">
                <h3 className="font-bold text-2xl text-mainBlack">초기 지급 포인트 및 만료일 설정</h3>
            </div>
            <div className="mb-7">
                <InputWithLabel label="지급 포인트" placeholder="10,000" inputStyles="w-1/2" labelStyles="font-bold text-base text-mainBlack min-w-[114px]"/>
            </div>
            <div>
            <InputWithLabel label="포인트 및 지급/구매 응모권 만료 설정" placeholder="10,000" inputStyles="w-1/2" labelStyles="font-bold text-base text-mainBlack min-w-[280px]"/>
            </div>
        </div>
        <div className="bg-white py-10 px-10 rounded-[20px] mt-8">
        <div className="flex items-center justify-center mb-7">
                <h3 className="font-bold text-2xl text-mainBlack">응모권 교환 비율 설정</h3>
            </div>
        <div className="flex items-center justify-between w-full">
            <InputWithLabel label="포인트" labelStyles="font-bold text-base text-mainBlack min-w-[120px]" inputStyles="w-[450px]" />
            <div className="flex flex-col gap-2">
                <div className="w-9 h-2 bg-black rounded"></div>
                <div className="w-9 h-2 bg-black rounded"></div>
            </div>
            <InputWithLabel label="응모권" inputStyles="w-[450px]" labelStyles="font-bold text-base text-mainBlack min-w-[120px]" />
        </div>
        </div>
    </section>
    
  )
}

export default page
