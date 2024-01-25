import { cn } from '@/lib/utils'
import { Pop } from '@/components/Fonts'

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={(cn('text-3xl font-semibold'), Pop.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
