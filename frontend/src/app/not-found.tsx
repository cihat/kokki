import Container from "@/components/ui/container";
import { CiStethoscope } from "react-icons/ci"


export default function NotFound() {
  return (
    <Container className='flex h-[calc(100vh-320px)] items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <CiStethoscope size={24} className='text-black dark:text-white' />
        <h1 className='font-bold text-lg mb-1 dark:text-gray-100'>
          This page could not be found.
        </h1>
      </div>
    </Container>
  )
}