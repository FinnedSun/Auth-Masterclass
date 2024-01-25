import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/LoginButton'
import { Pop } from '@/components/Fonts'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300 to-pink-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-sm',
            Pop.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">Simpel autentikasi servis</p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Sign-in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
