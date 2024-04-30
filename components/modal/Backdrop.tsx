import tw from "twin.macro";

export default function ModalBackDrop() {
  return (
    <div
      tw="w-full h-full fixed bg-common-black bg-opacity-30  inset-0 z-[30]"
      className="modal-backdrop"
    ></div>
  );
}
