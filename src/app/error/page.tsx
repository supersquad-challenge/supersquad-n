"use client"
import CommonError from '@/components/common/error/CommonError'
import React from 'react'

const ErrorPage = () => {
  return (
    <main>
      <CommonError
        msg='Error Occured'
      />
    </main>
  )
}

export default ErrorPage