import { memo } from "react"

export const SaveIcon = memo(({ className, ...props }) => (
  <svg
    width="24"
    height="24"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H16.5858C17.1162 3 17.6249 3.21071 18 3.58579L20.4142 6C20.7893 6.37507 21 6.88378 21 7.41421V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM8 5H14V8C14 8.55228 13.5523 9 13 9H9C8.44772 9 8 8.55228 8 8V5ZM6 5H6.5V8C6.5 9.38071 7.61929 10.5 9 10.5H13C14.3807 10.5 15.5 9.38071 15.5 8V5.24264L18.9142 8.65685C18.9718 8.71447 19 8.79232 19 8.87132V19H17V14C17 12.8954 16.1046 12 15 12H9C7.89543 12 7 12.8954 7 14V19H5V5H6ZM9 19H15V14.5H9V19Z"
    />
  </svg>
))

SaveIcon.displayName = "SaveIcon"
