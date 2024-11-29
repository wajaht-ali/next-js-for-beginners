import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 text-gray-600 h-full w-full flex flex-row items-center">
      <div className="mt-8 h-auto w-full border-2 p-4">
        <h1 className="text-5xl font-700 text-start leading-[80px]">
          <span className="text-black text-7xl">Lorem ipsum dolor</span> sit
          amet consectetur adipisicing elit
        </h1>
        <div className="my-6">
          <button>
            <Link
              className="rounded-lg border border-gray-400 bg-gray-100 text-black font-semibold p-4 mx-2"
              href="/login"
            >
              Login
            </Link>
          </button>
          <button>
            <Link
              className="rounded-lg border border-gray-400 bg-gray-100 text-black font-semibold p-4 mx-2"
              href="/register"
            >
              Register
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full border-2 p-4">
        <Image src="/download.jpeg" alt="my_image" layout="relative" height={500} width={500} />
        
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}
