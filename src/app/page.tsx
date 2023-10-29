"use client";
import React, { useState } from "react";
import Link from "next/link";

import Modal from "./deneme/modal";

const Page = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative bg-[url('../img/arka_plan_resmi.png')] bg-cover bg-no-repeat bg-fixed h-screen flex items-center justify-center">
      <div className="text-center  border-blue-500 p-4 rounded">
        <div>
          <button className="text-5xl" onClick={openModal}>+</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Page;
