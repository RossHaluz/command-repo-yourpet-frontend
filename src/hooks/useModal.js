const { useState } = require("react");

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return [isOpen, toggleModal, setIsOpen]
}

export default useModal;