"use client"

import { useEffect } from "react";

import Container from "@/components/ui/container";
import { BiErrorCircle } from "react-icons/bi"
import Error from "next/error";


export default function NotFound({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <Container className='flex h-[calc(100vh-320px)] items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <BiErrorCircle size={24} className='text-black dark:text-white' />
        <h1>Oh no, something went wrong... maybe refresh?</h1>
      </div>
    </Container>
  )
}