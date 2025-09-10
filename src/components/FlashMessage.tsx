import { useFlash } from '../context/FlashContext'

export const FlashMessage = () => {
  const { flash } = useFlash()
  if (!flash) return null

  const color =
    flash.type === 'success'
      ? 'bg-green-500'
      : flash.type === 'error'
        ? 'bg-red-500'
        : 'bg-blue-500'

  return (
    <div
      className={`${color} text-white px-6 py-3 rounded fixed top-5 right-5 z-50`}
    >
      {flash.text}
    </div>
  )
}
