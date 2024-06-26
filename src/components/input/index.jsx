import classnames from 'classnames'
import { groq } from 'next-sanity'

export const fragment = groq`
`

export default function Input({
  otherClasses,
  placeholder,
  name,
  required,
  type,
  onChange,
}) {
  const inputClasses = classnames(otherClasses, 'w-full relative')

  return (
    <div className={inputClasses}>
      <input
        placeholder={placeholder}
        required={required}
        type={type}
        className="w-full rounded border-[1px] border-neutral-300 px-4 py-3 font-aeronik-pro text-base font-normal leading-4 text-blue outline outline-[2px] outline-offset-[-2px] outline-transparent transition-all duration-400 placeholder:text-blue hover:border-blue hover:bg-neutral-200 focus:border-blue-300 focus:outline-blue-550"
        name={name}
        id={name}
        data-testid="input"
        onChange={(e) => onChange(e)}
      />
      {required && (
        <span className="absolute right-2 top-2 font-aeronik-pro text-base font-normal leading-4 text-error">
          *
        </span>
      )}
    </div>
  )
}
