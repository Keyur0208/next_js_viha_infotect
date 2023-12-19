import React from 'react'
import Bredcrump from '@/app/components/breadcrump/page'
import Solutions from '@/app/components/solotions/page'
import Connect from '@/app/components/connect/page'

export const metadata = {
  title: "Our Servies"
}

export default function Services() {
  return (
    <main>
      <Bredcrump
        page_name="services"
        page_title='"Our Providing Services"' />
      <Solutions />
      <Connect />
    </main>
  )
}
