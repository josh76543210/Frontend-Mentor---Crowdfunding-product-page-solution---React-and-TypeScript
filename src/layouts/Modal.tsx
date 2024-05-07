import { usePledgeData } from "../contexts/PledgeDataContext";

function Modal({
  children,
  noCloseIcon = false,
  className = "",
  classNameOverlay = "",
}: {
  children: React.ReactNode;
  noCloseIcon?: boolean;
  className?: string;
  classNameOverlay?: string;
}) {
  const { dispatch } = usePledgeData();

  return (
    <div
      onClick={(e) => {
        // no action if children are clicked
        if (e.target !== e.currentTarget) return;
        dispatch({ type: "closeModal" });
      }}
      className={`z-60 fixed top-0 left-0 right-0 bottom-0 bg-black/[0.4] flex justify-center py-32 lg:py-48 px-6 overflow-y-scroll ${classNameOverlay}`}
    >
      <div
        className={`bg-white rounded-lg relative p-8 m-auto max-w-3xl ${className}`}
        role="dialog"
        aria-labelledby="pledge-modal-title"
        aria-describedby="pledge-modal-description"
      >
        {!noCloseIcon && (
          <button
            onClick={() => dispatch({ type: "closeModal" })}
            aria-label="close"
            className="p-1 absolute top-9 sm:top-6 right-6 group"
          >
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                className="opacity-40 group-hover:opacity-100"
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
