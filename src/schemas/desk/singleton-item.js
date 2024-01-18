import { previewView } from 'sanity.config'

export const singletonItem = (
  S,
  type,
  title,
  icon,
) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.document()
        .schemaType(type)
        .documentId(type)
        .views([
          // Default form view
          S.view.form(),
          // Preview
          previewView(S),
        ]),
    )
}
