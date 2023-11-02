import { useEffect } from "react";

export const useClickOutSide = (
  isOpen: boolean,
  setIsOpen: any,
  className: string
) => {
  useEffect(() => {
    function handleOutsideClick(event: any) {
      // Kiểm tra xem click có diễn ra bên ngoài modal không
      if (isOpen && !event.target.closest(className)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
};
