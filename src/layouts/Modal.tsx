function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-60 fixed top-0 left-0 right-0 bottom-0 bg-black/[0.4] flex justify-center py-32 lg:py-48 px-6 overflow-y-scroll">
      <div
        className="bg-white rounded-lg relative p-8 m-auto max-w-3xl"
        role="dialog"
        aria-labelledby="pledge-modal-title"
        aria-describedby="pledge-modal-description"
      >
        <button
          aria-label="close"
          className="absolute top-10 sm:top-6 right-6 group"
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
        {children}
      </div>
    </div>
  );
}

export default Modal;
