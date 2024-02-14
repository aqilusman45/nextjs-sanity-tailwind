import BookForm from '../book-form'

export default function DynamicForms({ form, otherClasses, variant }) {
  switch (form) {
    case 'book-form':
      return <BookForm otherClasses={otherClasses} variant={variant} />
    default:
      return null
  }
}
