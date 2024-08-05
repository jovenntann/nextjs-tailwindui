'use client'

import { Footer, Favorites, Categories, Header } from '@/components/Index';

export default function Index() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Categories />
        <Favorites />
        <Footer />
      </main>
    </div>
  )
}
