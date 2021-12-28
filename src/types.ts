// Types

export interface Entry {
  id: string
  clientId: string
  task: string
  duration: number
  description: string
  user: string
}

export interface Client {
  id: string
  projectsId: string[]
  title: string
  description: string
  user: string
}
