import classnames from 'classnames'
import { groq } from 'next-sanity'

export const fragment = groq`
`

export default function TextArea({
  otherClasses,
  name,
  placeholder,
  required,
}) {
  const textAreaClasses = classnames('w-full relative')

  return (
    <div className={textAreaClasses} data-testid="text-area">
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={classnames(
          'h-[42px] min-h-[42px] w-full max-w-full rounded border-[1px] border-neutral-300 px-4 py-3 font-aeronik-pro text-base font-normal leading-4 text-blue outline outline-[2px] outline-offset-[-2px] outline-transparent transition-all duration-400 placeholder:text-blue hover:border-blue hover:bg-neutral-200 focus:border-blue-300 focus:outline-blue-550',
          otherClasses,
        )}
      />
      {required && (
        <span className="absolute right-2 top-2 font-aeronik-pro text-base font-normal leading-4 text-error">
          *
        </span>
      )}
    </div>
  )
}
