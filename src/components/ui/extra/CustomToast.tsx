import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export const CustomToast = () => {
  const { i18n } = useTranslation();
  const language = i18n.language as "en" | "fa";

  return (
    <ToastContainer
      position={language === "fa" ? "bottom-right" : "bottom-left"}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={language === "fa"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default CustomToast;
