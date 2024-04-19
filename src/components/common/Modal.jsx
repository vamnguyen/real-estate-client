import { useAppStore } from "~/hooks/stores/useAppStore";

const Modal = () => {
  const { contentModal, setModal } = useAppStore();

  return (
    <div
      className="fixed bg-overlay z-[999] w-screen h-screen"
      onClick={() => setModal(false, null)}
    >
      {contentModal}
    </div>
  );
};

export default Modal;
