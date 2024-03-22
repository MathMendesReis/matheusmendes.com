export type LinksArrayType = {
  title: string
  id: number
  path: string
}

export const LinksArray: LinksArrayType[] = [
  { title: 'home', id: 1, path: '/#home' },
  { title: 'about', id: 2, path: '/#about' },
  { title: 'projects', id: 3, path: '/#projects' },
  { title: 'contact', id: 4, path: '/#contact' },
]

export type CurrentPageState = (typeof LinksArray)[number]['path']
