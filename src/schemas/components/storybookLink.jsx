import Image from 'next/image'
import Link from 'next/link'

import { getStorybookURL } from '../../lib/storybook-url'

export const StorybookLink = ({ id }) => {
  return (
    <Link
      href={getStorybookURL(id)}
      target="_blank"
      className="block rounded-[3px] border-[1px] border-solid border-[#E7E9EC] bg-white p-1"
    >
      <Image src="/storybook.svg" width={20} height={20} alt="storybook" />
    </Link>
  )
}
