import { useEffect } from 'react'
import { useFlash } from '../context/FlashContext'

export const FlashMessage = () => {
  const { flash, setFlash } = useFlash()

  useEffect(() => {
    if (!flash) return
    const timer = setTimeout(() => setFlash(null), 3000)
    return () => clearTimeout(timer)
  }, [flash, setFlash])

  if (!flash) return null

  const color =
    flash.type === 'success'
      ? 'bg-green-500'
      : flash.type === 'info'
        ? 'bg-blue-500'
        : 'bg-red-500'

  return (
    <div
      className={`fixed top-4 right-4 ${color} text-white px-4 py-2 rounded-lg shadow-lg`}
    >
      {flash.text}
    </div>
  )
}
