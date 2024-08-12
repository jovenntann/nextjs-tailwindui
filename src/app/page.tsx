'use client'

import { Footer, Favorites, Categories, Header } from '@/components/Index';

export default function Index() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="bg-white shadow sm:rounded-lg max-w-7xl my-4 mx-auto m-8 sm:mx-4">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Manage subscription</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
                nam.
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Change plan
              </button>
            </div>
          </div>
        </div>
        <Categories />
        <Favorites />
        <Footer />
      </main>
    </div>
  )
}
