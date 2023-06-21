/// <reference types="vite/client" />

interface Array<T> {
  isEqual(arr: T[]): boolean
  isEmpty(): boolean
}


interface Breadcrumb {
  routeName: string
  title: string
}