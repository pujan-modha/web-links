import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {linksData} from "./data/links.js";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className='overflow-x-hidden w-full h-screen bg-background text-foreground font-mono relative'>
          <div className='max-w-xl w-[90%] mx-auto my-[5%] flex flex-grow flex-col relative'>
              <div className='mx-auto aspect-square w-[33%] mb-[5%]'>
                  <img src="https://avatars.githubusercontent.com/u/109509620" alt="Pujan Modha" className='rounded-full'/>
              </div>
              <div className='text-center mb-[10%]'>
                  <h1 className='text-3xl font-bold text-purple'>Pujan Modha</h1>
                  <p className='text-lg'>Computer Science Major</p>
              </div>
              <div className='flex flex-col w-full mx-auto my-auto'>
                  {linksData.map((links, id) => (
                  <a href={links.redirectURL} target='_noref'
                      key={id} className='my-[2.5%] relative inline-flex w-full items-center justify-center rounded-full bg-purple px-8 py-6 font-medium border-2 border-foreground hover:text-purple hover:bg-current-line hover:border-purple'>
                      <div className='absolute left-2.5'>
                          <FontAwesomeIcon icon={links.fontAwesomeIcon} size='2xl'/>
                      </div>
                      <span className='absolute text-xl'>
                          {links.linkText}
                      </span>
                      <div className='absolute right-2.5'>
                          <FontAwesomeIcon icon={faArrowRight} size='2xl'/>
                      </div>
                  </a>
                  ))}
              </div>
              <div className='flex flex-col mt-[5%] mb-[1%]'>
                  <p className='text-center'>Made with <span className='animate-pulse'><a href="https://github.com/pujan-modha/web-links">💜</a></span> by <span className='text-purple'><a href="https://github.com/pujan-modha">Pujan Modha</a></span>.</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
