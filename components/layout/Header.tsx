import Link from "next/link";

export function Header() {
  return (
    <div className="">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-96 px-8 py-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-4xl font-bold text-blue-800">
            <span className="text-blue-800">⟳</span> SabiWorks
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <button className="text-gray-900 font-medium hover:text-blue-800">
            Services
          </button>
          <Link
            href="/auth"
            className="text-gray-900 font-medium hover:text-blue-800"
          >
            Sign up / Log in
          </Link>
          <button className="px-6 py-2 border-2 border-blue-800 text-blue-800 rounded-full font-medium hover:bg-blue-50">
            Become a Tasker
          </button>
        </nav>
      </header>
    </div>
  );
}
