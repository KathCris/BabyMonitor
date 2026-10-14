'use client'
import { AirplaneTakeoffIcon } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

export default function AuthPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <AirplaneTakeoffIcon size={32} /> Página de Autenticação
      </h1>
      <Button>
        <AirplaneTakeoffIcon size={32} />
        <span>Entrar</span>
      </Button>
    </div>
  )
}
