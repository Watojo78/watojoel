export interface Certification {
  id: number
  name: string
  provider: string // e.g., AWS, Google, Microsoft
  dateEarned?: string // Optional: Date the certification was earned
  link?: string // Optional: Link to verification or badge
}
