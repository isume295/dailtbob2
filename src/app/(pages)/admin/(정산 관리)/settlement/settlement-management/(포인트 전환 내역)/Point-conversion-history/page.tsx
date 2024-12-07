'use client'
import CommonHeader from '@/components/CommonHeader'
import DropDownWithLabel from '@/components/DropDownWithLabel'
import InputWithLabel from '@/components/InputWithLabel'
import { Button } from '@nextui-org/react'
import React from 'react'

const page = () => {
  const labelStyle = "font-normal text-base text-mainBlack min-w-[90px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown=dropDownOptions[0].key
  return (
    <section>
    <CommonHeader title='포인트 전환 내역 '/>
    <header className= " bg-white py-10 px-10 rounded-[20px] ">
      <div className='flex items-center gap-16 w-full'>
        <div className='w-full'>
        <InputWithLabel label='사용자 ID' placeholder='사용자 ID' labelStyles={labelStyle}/>
        </div>
        <div className='flex items-center gap-8 w-full'>
          <div className='w-full'>
          <InputWithLabel label='이름'  labelStyles={labelStyle}/>
          </div>
          <Button className='py-3 px-5 bg-mainBlack text-white'>검색</Button>
        
        </div>
        
      </div>
      <div className='mt-5'>
        <DropDownWithLabel options={dropDownOptions} 
        defaultSelectedKeys={defaultDropDown} title='상태' titleStyles={labelStyle} selectStyles='w-[470px]'/>
      </div>
      </header>
      </section>
  )
}

export default page