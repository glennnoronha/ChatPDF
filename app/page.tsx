import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: 'Store PDF Documents',
    description: "Keep all your PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon
  }
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-tr from-teal-400 to-white">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-500">
              Chat To Your Personal Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Transform Your PDFs into Immersive Conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-teal-500">ChatPDF.</span>
              <br />
              <br /> Upload your document and let 
              <span className="text-teal-500"> ChatPDF</span>{" "} transform it into a{" "}
              <span className="font-bold">dynamic conversation</span>. From answering questions to
              summarizing content, it's the perfect tool to boost productivity effortlessly—making static
              PDFs interactive and engaging. Ideal for everyone!
            </p>
          </div>  
          
          <Button asChild className="mt-10">
            <Link href='/dashboard'> START NOW!</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
