import Container from "@/components/ui/container";
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <Image className="rounded-lg saturate-0 transition-all duration-700 hover:saturate-100"
        src="/img/pan-cake.jpg"
        width={500}
        height={500}
        alt="pan cake photo" />
    </div>
  )
}
