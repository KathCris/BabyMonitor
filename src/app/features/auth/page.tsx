'use client'

import { useState } from 'react'

import { Input } from '@base-ui/react/input'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function AuthPage() {
  const [token, setToken] = useState('')
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [roomId, setRoomId] = useState('')
  const router = useRouter()
  const handleGenerateToken = () => {
    const newToken = Math.random().toString(36).substring(2, 15)
    setToken(newToken)
  }

  const handleToggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  }

  const handleConnect = () => {
    if (roomId === token) {
      router.push(`/features/room/${roomId}`)
    } else {
      console.log('Token inválido')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        {!isMonitoring ? (
          <div>
            <h1 className="text-2xl font-bold">Modo de geração de token</h1>
            <div className="flex items-center justify-center gap-4">
              <Input
                type="text"
                placeholder="Token"
                className="w-full max-w-md border border-gray-300 rounded-md p-2"
                value={token}
                disabled={token.length > 0}
              />
              <Button onClick={handleGenerateToken}>Gerar Token</Button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold">Modo de conexão com o BabyMonitor</h1>
            <div className="flex items-center justify-center gap-4">
              <Input
                type="text"
                placeholder="Colocar o token gerado no BabyMonitor"
                className="w-full max-w-md border border-gray-300 rounded-md p-2"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <Button onClick={handleConnect}>Conectar</Button>
            </div>
          </div>
        )}
        <div>
          <Button onClick={handleToggleMonitoring}>
            {isMonitoring
              ? 'Trocar para modo de geração de token'
              : 'Trocar para modo de conexão com o BabyMonitor'}
          </Button>
        </div>
      </div>
    </div>
  )
}
