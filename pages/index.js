import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col mx-8 min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl mb-10 text-fuschia font-sans font-black">
        Tailwind Stories
      </h1>
      <ul className="flex space-x-8">
        <li className="flex flex-col items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-300 to-fuschia rounded-full p-1">
            <a href="#" className="rounded-full bg-white block p-1">
              <img
                className="h-24 w-24 rounded-full object-cover hover:-rotate-6 transform transition"
                src="https://placekitten.com/200/300"
                alt=""
              />
            </a>
            <button className="create-story">+</button>
          </div>
          <p>Meowwww</p>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-300 to-fuschia rounded-full p-1">
            <a href="#" className="rounded-full bg-white block p-1">
              <img
                className="h-24 w-24 rounded-full object-cover hover:-rotate-6 transform transition"
                src="https://placekitten.com/270/300"
                alt=""
              />
            </a>
          </div>
          <p>KittyOno</p>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-300 to-fuschia rounded-full p-1">
            <a href="#" className="rounded-full bg-white block p-1">
              <img
                className="h-24 w-24 rounded-full object-cover hover:-rotate-6 transform transition"
                src="https://placekitten.com/330/300"
                alt=""
              />
            </a>
          </div>
          <p>Ooobooo</p>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-300 to-fuschia rounded-full p-1">
            <a href="#" className="rounded-full bg-white block p-1">
              <img
                className="h-24 w-24 rounded-full object-cover hover:-rotate-6 transform transition"
                src="https://placekitten.com/170/300"
                alt=""
              />
            </a>
          </div>
          <p>Snugglesss</p>
        </li>
      </ul>
    </div>
  )
}
