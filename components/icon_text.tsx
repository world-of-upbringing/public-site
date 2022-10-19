import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export default function IconText(iconDef: IconDefinition, text: string) {
  return <div className="flex flex-row py-4">
    <FontAwesomeIcon className='text-grey px-2' size='2x' icon={iconDef} />
    <p className="flex flex-auto text-2xl px-2 align-middle text-grey">{text}</p>
  </div>
}