import React from 'react'
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import ErrorBox from "../../Components/ErrorBox/ErrorBox"

export default function Comments() {
  return (
    <>
        <div className="">
          <ErrorBox msg="هیچ کامنتی یافت نشد!" />
          <DeleteModal/>
        </div>
    </>
  );
}
