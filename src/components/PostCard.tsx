import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

type Props = {
  id: number
  title: string
  excerpt: string
  isLocal?: boolean
  onEdit?: () => void
  onDelete?: () => void
}

export const PostCard = ({
  id,
  title,
  excerpt,
  isLocal,
  onEdit,
  onDelete,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleConfirmDelete = () => {
    if (onDelete) onDelete()
    setIsDialogOpen(false)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition relative">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 hover:underline">
        Read more
      </Link>

      {isLocal && (
        <div className="absolute top-3 right-3 flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="text-yellow-500 hover:text-yellow-600 cursor-pointer"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => setIsDialogOpen(true)}
              className="text-red-500 hover:text-red-600 cursor-pointer"
            >
              Delete
            </button>
          )}
        </div>
      )}

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <Dialog.Panel className="relative bg-white p-6 rounded shadow-lg w-full max-w-sm z-50">
          <Dialog.Title className="text-lg font-bold">
            Delete Post?
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </Dialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
