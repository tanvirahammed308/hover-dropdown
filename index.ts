{/* User Icon with Hover Menu */}
<div className="relative group border-2 border-gray-400 p-2 rounded-lg shadow-md cursor-pointer">
  <FaRegUser className="text-[#2381df]" />

  {/* Dropdown Menu */}
  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
    <ul className="py-2 text-gray-700">
      <li>
        <Link
          href="/profile"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          href="/orders"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          My Orders
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Login
        </Link>
      </li>
    </ul>
  </div>
</div>
