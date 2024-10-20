import type { ColumnType } from 'kysely'
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type User = {
  id: string
  email: string
  emailVerified: Generated<boolean>
  clerkId: string
}
export type Workspace = {
  id: string
  name: string
  slug: string
}
export type DB = {
  User: User
  Workspace: Workspace
}
