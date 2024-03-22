'use client'
import { AlignJustify } from 'lucide-react'
import React, { useState } from 'react'

export default function ButtonModal() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleChangeOpenModal = () => {
    setOpenModal((prev) => !prev)
  }
  const ButtonOpenOrClosedModal = (
    <button onClick={handleChangeOpenModal} className="sm:hidden flex">
      <AlignJustify />
    </button>
  )
  return {
    ButtonOpenOrClosedModal,
    openModal,
  }
}
