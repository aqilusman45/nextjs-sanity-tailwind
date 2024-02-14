import classnames from 'classnames'
import { useState } from 'react'

import { countries } from '../../utils/helpers'
import Button from '../button/Button'
import Input from '../input'
import Select from '../select'
import TextArea from '../text-area'

export default function BookForm({ otherClasses, variant }) {
  const bookFormClasses = classnames(otherClasses)

  const [state, setState] = useState()

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form
      action=""
      name="book-form"
      className={classnames(' w-full', bookFormClasses)}
      data-testid="book-form"
    >
      <div className="item flex flex-col gap-4 md:flex-row">
        <Input
          required={true}
          placeholder="First name"
          type="text"
          onChange={(e) => handleChange(e)}
          name="first-name"
        />
        <Input
          required={true}
          placeholder="Last name"
          type="text"
          onChange={(e) => handleChange(e)}
          name="last-name"
        />
      </div>
      <div className="item mt-4 flex flex-col gap-4 md:flex-row">
        <Input
          required={true}
          placeholder="Company"
          type="text"
          onChange={(e) => handleChange(e)}
          name="company"
        />
        <Input
          required={true}
          placeholder="Business email"
          type="email"
          onChange={(e) => handleChange(e)}
          name="business-email"
        />
      </div>
      <div className="mt-4 w-full">
        <Select
          list={countries}
          required={true}
          onChange={(e) => handleChange(e)}
          name="country"
          placeholder="Country"
        />
      </div>
      <div className="mt-4 w-full">
        <TextArea
          onChange={(e) => handleChange(e)}
          name="how-did-you-hear-about-us"
          otherClasses="h-24 lg:h-[42px]"
          placeholder="How did you hear about us?"
        />
      </div>
      <Button
        type="button"
        label="Try Netacea"
        variant="primary-arrow"
        mode={variant === 'dark' ? '' : 'light'}
        otherClasses="mt-4 lg:mt-10 w-full md:w-auto !justify-center md:justify-between"
      />
    </form>
  )
}
