export interface Certification {
  id: number,
  status: string,
  date_created?: string,
  date_updated?: string,
  name: string,
  issuing_organization: string,
  issue_date: string,
  expiration_date?: string,
  credential_id?: string,
  credential_url: string
}
