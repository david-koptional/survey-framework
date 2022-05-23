export interface Question {
  id: string
  name: string
  section: string
  options: Array<string>
  value: any | any[]
  defaultValue: any | any[]
  type: string
  optional?: boolean
  extraInfo?: string
  skipsTo?: { id: string; value: string }[]
  requiresAnswer?: { id: string; value: string }[]
}

export interface Section {
  name: string
  id: string
  skipped?: boolean
  next: string | null
}
