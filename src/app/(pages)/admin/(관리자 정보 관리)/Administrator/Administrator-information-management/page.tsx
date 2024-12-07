'use client'
import CommonHeader from '@/components/CommonHeader'
import DropDown from '@/components/DropDown'
import DropDownWithLabel from '@/components/DropDownWithLabel'
import HeaderDropDown from '@/components/HeaderDropDown'
import InputNoLabel from '@/components/InputNoLable'
import row11Column1 from '@/data/tables/row11Column1'
import { Button, Checkbox, Link, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'
import { useState } from 'react'
const page = () => {
  const labelStyle = "font-bold text-base text-mainBlack min-w-[100px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown=dropDownOptions[0].key
  const viewOptions = [
    { key: "10", label: "10개씩 보기" },
    { key: "20", label: "20개씩 보기" },
    { key: "50", label: "50개씩 보기" },
    { key: "100", label: "100개씩 보기" },
  ];
  const [currentData, setCurrentData] = useState<any>();
  const viewOptionsDefault = viewOptions[0].key;
  const [viewValue, setViewValue] = useState(viewOptionsDefault);
  const [page, setPage] = useState(1);
  const rowsPerPage = parseInt(viewValue);
  const pages = Math.ceil(row11Column1.length / rowsPerPage);

  // Memoized items
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return row11Column1.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section>
    <CommonHeader title='상품 관리 '/>
    <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className='flex items-center gap-7 w-full'>
          <p className='min-w-[72px] font-normal text-base'>광고제목</p>
          <div className='flex items-center gap-7 w-full'>
            <div className='w-full'> <InputNoLabel placeholder='상품명'/></div>
           
            <Button className='py-3 px-5 bg-mainBlack text-white' >검색</Button>
          </div>
        </div>
        <div className='flex items-center gap-6 mt-5'>
        <DropDownWithLabel options={dropDownOptions} 
        defaultSelectedKeys={defaultDropDown} title='그룹' titleStyles={labelStyle} selectStyles='w-[425px]'/>
        <DropDownWithLabel options={dropDownOptions} 
        defaultSelectedKeys={defaultDropDown} title='하위 그룹' titleStyles={labelStyle} selectStyles='w-[425px]'/>
      </div>
    </header>
    <header className= " bg-white py-10 px-10 rounded-[20px] mt-5">
      <div className='flex items-center justify-between'>
          
      
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
          <DropDown options={dropDownOptions} defaultSelectedKeys={defaultDropDown} selectStyles="w-[124px]"/>
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[70px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <Button className="py-3 px-8 rounded-md bg-mainBlack text-white"
            
            >
              <Link className='text-white' href='/admin/Administrator/Administrator-information-management/1'>
              권한 그룹 관리</Link>
              
            </Button>
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white"
            
            >
              신규 추가
            </Button>

          </div>
        
        </div>
        <article className="mt-10">
        <Table
  aria-label="Data Table"
  shadow="none"
  className="table-fixed w-full" // Ensures the table layout doesn't expand
  classNames={{
    th: [
      "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center whitespace-nowrap",
    ],
    td: [
      "px-6 text-center font-normal text-base text-[#363941] whitespace-nowrap truncate max-w-[150px]", // Truncate text and limit width
    ],
  }}
  bottomContent={
    <div className="flex w-full justify-center mt-8">
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  }
>
  <TableHeader>
    <TableColumn className="w-[5%]">
    <Checkbox
    onClick={() => {
      if (allListCheckedPageNumbers.includes(page)) {
        setAllListCheckedPageNumbers(
          allListCheckedPageNumbers.filter((number) => number !== page)
        );
        setClickedRowIds(
          clickedRowIds.filter(
            (number) => !items.map((item: any) => item.number).includes(number)
          )
        );
      } else {
        setClickedRowIds([
          ...clickedRowIds,
          ...items.map((item: any) => item.number),
        ]);
        setAllListCheckedPageNumbers([
          ...allListCheckedPageNumbers,
          page,
        ]);
      }
    }}
    className="size-[14px] rounded-[2px] bg-transparent"
    isSelected={allListCheckedPageNumbers.includes(page)}
  />
    </TableColumn>
    <TableColumn className="w-[6%]">번호</TableColumn>
    <TableColumn className="w-[6%]">권한</TableColumn>
    <TableColumn className="w-[6%]">아이디</TableColumn>
    <TableColumn className="w-[6%]">휴대전화번호</TableColumn>
    <TableColumn className="w-3%]">이름</TableColumn>
    <TableColumn className="w-[35%]">가입일시</TableColumn>
    <TableColumn className="w-[35%]">승인일시</TableColumn>
    <TableColumn className="w-[3%]">승인</TableColumn>
  </TableHeader>
  <TableBody>
    {items.map((row) => (
      <TableRow key={row.number} className="border-b-1">
        <TableCell>
          <Checkbox
            className="text-center size-[14px] rounded-[2px]"
            onClick={() => {
              if (clickedRowIds.includes(row.number)) {
                setClickedRowIds(
                  clickedRowIds.filter((id) => id !== row.number)
                );
              } else {
                setClickedRowIds([...clickedRowIds, row.number]);
              }
            }}
            isSelected={clickedRowIds.includes(row.number)}
          />
        </TableCell>
        <TableCell className="truncate">{row.number}</TableCell>
        <TableCell className="truncate">{row.authority}</TableCell>
        <TableCell className="truncate">{row.id}</TableCell>
        <TableCell className="truncate">{row.phoneNumber}</TableCell>
        <TableCell className="truncate">
          
            {row.name}
          
        </TableCell>
        <TableCell className="truncate ">{row.registrationDate}</TableCell>
        <TableCell className="truncate"> {row.approvalDate}</TableCell>
        <TableCell className="truncate"><button className='!py-2 !px-4 rounded-[5px] bg-mainBlack text-white'>{row.approval}</button></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

        </article>
        </header>
    </section>
  )
}

export default page