'use client'

import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function RoomPage() {
  const { roomId } = useParams()
  const router = useRouter()

  return (
    <main>
      <h1>Sala de monitoramento</h1>
      <p>Room ID: {roomId}</p>
      <Button onClick={() => router.back()}>Voltar</Button>
    </main>
  )
}
