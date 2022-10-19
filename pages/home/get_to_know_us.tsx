import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

export default function GetToKnowUs() {
  return <section id="get-to-know-us" className="flex-auto bg-background">
    <div className="flex flex-col">
      <p className="text-3xl text-center font-bold my-6 p-3 text-grey"> Get to Know Us</p>
      <div className="flex flex-row p-3">
        <div className="flex w-1/4"/>
        <p className="text-center text-light-grey">World of Upbringing - Nurturing Values is an affordable Online Marriage & Mental Health Wellness Counselling platform. We are here to LISTEN to your emotional turmoil and act as a CATALYST in your life. The journey with us will empower you to embrace the path of internal & external healing & hailing in life. LEARN MORE.</p>
        <div className="flex w-1/4"/>
      </div>
      <div className="flex flex-row py-12 px-3">
        <div className="flex w-1/5"/>
        <div className="flex flex-col w-1/5 p-5">
          <hr className="flex flex-auto w-full h-2 bg-light-grey"/>
          <div className="flex flex-row py-4">
            <FontAwesomeIcon className='text-grey px-2' size='2x' icon={faAnchor} />
            <p className="flex flex-auto text-2xl px-2 align-middle text-grey">Confidentiality</p>
          </div>
        </div>
        <div className="flex flex-col w-1/5 p-5">
          <hr className="flex flex-auto w-full h-2 bg-light-grey"/>
          <div className="flex flex-row py-4">
            <FontAwesomeIcon className='text-grey px-2' size='2x' icon={faAnchor} />
            <p className="flex flex-auto text-2xl px-2 align-middle text-grey">Confidentiality</p>
          </div>
        </div>
        <div className="flex flex-col w-1/5 p-5">
          <hr className="flex flex-auto w-full h-2 bg-light-grey"/>
          <div className="flex flex-row py-4">
            <FontAwesomeIcon className='text-grey px-2' size='2x' icon={faAnchor} />
            <p className="flex flex-auto text-2xl px-2 align-middle text-grey">Confidentiality</p>
          </div>
        </div>
        <div className="flex w-1/5"/>
      </div>
    </div>
  </section>
}