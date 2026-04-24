export interface Profile {
  fullName: string
  title: string
  bio: string
  aboutMe: string
  contacts: Contact[]
  socialLinks: SocialLink[]
  resumeUrl: string
}

export interface Contact {
  id: string
  text: string
  icon: string
  url: string
}

export interface SocialLink {
  platform: string
  icon: string
  url: string
}
