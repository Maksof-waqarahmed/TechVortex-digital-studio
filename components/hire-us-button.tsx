"use client";

import React from "react";
import { Modal, ModalTrigger } from "./ui/animated-modal";

export function HireUSButton() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            HIRE US
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-2xl">
            🤝
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}
