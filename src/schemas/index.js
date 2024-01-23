import { navigation } from './documents/navigation'
import { page } from './documents/page'
import { button } from './objects/button'
import { img } from './objects/img'
import { navbarObject } from './objects/navbarObject'

export const schemaTypes = [page, navigation, navbarObject, img, button]

// Add name of the document here in quotations so the workflow works find on that name as well
export const documentTypesForWorkFlow = ['page']
