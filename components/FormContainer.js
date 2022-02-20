import React, {useRef, useState} from 'react'
import axios from 'axios'
import Card from './Card'
import Loader from './Loader'

export default function FormContainer() {
    const [url, setUrl ] = useState('https://bit.ly/3JVtCZZ')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [ogURL, setOgURL] = useState('')
    const [loading, setLoading] = useState(true)
    const [loaderVisible, setLoaderVisible] = useState(false)
    const result = useRef()
    const revealURL = async (e, ref) => {
        e.preventDefault()
        setLoading(true)
        setLoaderVisible(true)
        const response = await axios.post('/api/reveal', { url });
        const meta = response.data.metadata;
        console.log(meta)
        setTitle(meta.title)
        setDescription(meta.description)
        setOgURL(meta.url)
        setLoading(false)
        setLoaderVisible(false)
        // const result = document.getElementById('result').scrollIntoView({behavior: 'smooth'})
        if (!result.current) return;
        result.current.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div>
        <aside className="text-white bg-black">
    <div className="max-w-screen-xl px-4 py-24 mx-auto text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <p className="text-5xl font-bold sm:text-7xl">
            Revelar
        </p>

        <p className="mt-8 text-xl">
           It shows you the real destination of a link or shortened urls.
        </p>

        <form className="mt-8 sm:flex" onSubmit={revealURL}>
        <div className="sm:flex-1">
            <label htmlFor="url" className="sr-only">URL</label>

            <input
            type="url"
            placeholder="Enter a URL..."
            className="w-full p-3 text-black border-1 border-gray-700 rounded-lg outline-none input"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            />
        </div>

        <button
            type="submit"
            className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-blue-600 rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-blue-500 sm:text-center"
        >
            Reveal &nbsp; 🔮
        </button>
        </form>
        </div>
    </div>
    </aside>
    <div className="max-w-screen-xl mx-auto pb-12 sm:pb-16 md:pb-20 lg:max-w-2xl lg:px-8" style={{display: loaderVisible ? 'block' : 'none'}}>
        <Loader />
    </div>
    <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8" style={{display: loading ? 'none' : 'block'}}>
        <Card title={title} description={description} ogURL={ogURL} tabindex="0" id="result" ref={result}/>
    </div>
    </div>
  )
}
