import { Session, getServerSession } from 'next-auth'
import { SignInButton } from './sign-in-button'
import { SignOutButton } from './sign-out-button'

export async function Header () {
  const session = await getServerSession()
  const isLogged = session != null && session.user != null

  return (
    <header className='border-b p-2 backdrop-blur-sm sticky top-0 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>twgiveaway</h1>
      {isLogged ? <UserSession session={session} /> : <SignInButton />}
    </header>
  )
}

function UserSession ({
  session
}: {
  session: Session
}) {
  const { user } = session
  if (user == null) return null
  const { name, image } = user
  if (name == null || image == null) return null

  return (
    <div className='flex items-center gap-2'>
      <picture className='size-8 rounded-full overflow-hidden'>
        <img src={image} alt={name} />
      </picture>
      <span>{name}</span>
      <SignOutButton />
    </div>
  )
}