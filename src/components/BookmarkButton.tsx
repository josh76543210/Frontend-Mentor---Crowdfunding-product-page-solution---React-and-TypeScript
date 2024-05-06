function BookmarkButton({ bookmarked }: { bookmarked: boolean }) {
  return (
    <button
      className={`group flex items-center gap-4 bg-gray-50 ${
        bookmarked ? "text-dark-cyan" : "text-dark-gray"
      } rounded-full font-semibold group-hover:bg-dark-cyan leading-none`}
    >
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle
            className={`${
              bookmarked ? "fill-dark-cyan" : "group-hover:fill-dark-gray"
            }`}
            fill={"#2F2F2F"}
            cx="28"
            cy="28"
            r="28"
          />
          <path
            className={`${bookmarked ? "fill-white" : ""}`}
            fill={"#B1B1B1"}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
      <span className="pr-6 inline sm-3:hidden sm-2:inline">
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  );
}

export default BookmarkButton;
