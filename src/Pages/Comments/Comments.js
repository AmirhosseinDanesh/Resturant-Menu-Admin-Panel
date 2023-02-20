import React from 'react'
import DetailModals from '../../Components/DetailModals/DetailModals';
import ErrorBox from "../../Components/ErrorBox/ErrorBox"

export default function Comments() {
  return (
    <>
        <div className="">
          <ErrorBox msg="هیچ کامنتی یافت نشد!" />
          <DetailModals/>
        </div>
    </>
  );
}
