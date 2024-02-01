'use client'

import { signOut } from 'next-auth/react'
import { LogoutIcon } from './icons'

export function SignOutButton () {
  return (
    <button onClick={() => signOut()}>
      <LogoutIcon />
    </button>
  )
}