import { groq } from 'next-sanity'
import classnames from 'classnames'
import IconWithCurrentColor from '../icon-with-current-color'

export const fragment = groq`
`

export default function Select({
  otherClasses,
  name,
  required,
  placeholder,
  list,
  onChange,
}) {
  const selectClasses = classnames(otherClasses, 'w-full relative')

  return (
    <div className={selectClasses} data-testid="select">
      <select
        name={name}
        required={required}
        id={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="focus:outline-blue-550 w-full appearance-none rounded border-[1px] border-neutral-300 px-4 py-3 font-aeronik-pro text-base font-normal leading-4 text-blue outline outline-[2px] outline-offset-[-2px] outline-transparent transition-all duration-400 placeholder:text-blue hover:border-blue hover:bg-neutral-200 focus:border-blue-300"
      >
        {list.map((node, i) => {
          return (
            <option
              key={i}
              value={i === 0 ? '' : node}
              selected={i === 0}
              disabled={i === 0}
            >
              {node}
            </option>
          )
        })}
      </select>
      <span className="absolute right-4 top-2/4 -translate-y-2/4 text-blue">
        <IconWithCurrentColor
          icon="chevron-down"
          className="h-4 w-4 [&>path]:stroke-current"
        />
      </span>

      {required && (
        <span className="text-error absolute right-2 top-2 font-aeronik-pro text-base font-normal leading-4">
          *
        </span>
      )}
    </div>
  )
}
