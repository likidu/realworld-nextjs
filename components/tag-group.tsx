import { Tag } from '@prisma/client'
import Link from 'next/link'

interface TagGroupProps {
  tags?: Tag[]
}

export default function TagGroup({ tags }: TagGroupProps) {
  return (
    <div>
      {tags ? (
        tags.map((tag, index) => (
          <Link key={`tag-${index}`} href={`/?tag=${tag.tagName}`}>
            <p className='px-2 py-1 mr-2 text-sm font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500'>
              {tag.tagName}
            </p>
          </Link>
        ))
      ) : (
        <p className='px-2 py-1 mr-2 text-sm font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500'>
          No tags.
        </p>
      )}
    </div>
  )
}
