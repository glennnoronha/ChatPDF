import Link from "next/link";

function Header() {
    return (
        <div className="flex justify-between bg-white shadow-sm p-5 border-b">
            <Link href="/dashboard" className="text-2xl" >
            Chat<span className="text-teal-500">PDF</span>
      </Link>
        </div>
    );
}
export default Header