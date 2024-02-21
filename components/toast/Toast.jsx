import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeToast, openToast } from "../../redux/toastSlice";
const VariantType = {
  success: "bg-green-400 ",
  warning: "bg-yellow-500 ",
  error: "bg-red-400 ",
  info: "bg-blue-400 ",
};
const Toast = () => {
  const dispatch = useDispatch();
  const { isOpen, message, variant } = useSelector((store) => store.toastStore);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    setTimeout(() => {
      dispatch(closeToast());
    }, 7000);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="fixed bg-black/10 z-50 h-full  w-full  top-0 left-0 backdrop-filter  ">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, top: -200 }}
            animate={{ opacity: 1, top: 10 }}
            transition={{ duration: 0.5 }}
            draggable={true}
            className={`fixed flex  ${VariantType[variant]} left-[50%] -translate-x-1/2  z-50 p-2 w-[360px] sm:w-fit  min-h-fit h-auto   rounded-lg `}
          >
            <span className="absolute  top-1 right-2    ">
              <button
                className={`rounded-full ${VariantType[variant]} p-1 hover:scale-110 transition-all`}
                onClick={() => [dispatch(closeToast())]}
              >
                <MdClose
                  size={20}
                  color="white"
                  className="hover:scale-110 transition-all"
                />
              </button>
            </span>
            <span className={`mt-5  h-full text-justify text-md text-white`}>
              {message}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
};

export default Toast;
