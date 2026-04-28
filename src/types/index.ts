import type { ReactNode } from "react"

export interface SectionLink {
  label: string
  url: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  details?: string
  icon?: string
  image?: string
  links?: SectionLink[]
  showButton?: boolean
  buttonText?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}