import { Badge } from '@/components/ui/badge'
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
            <Badge className='mr-[3px]'>{tag.tagName}</Badge>
          </Link>
        ))
      ) : (
        <Badge className='mr-2 text-muted-foreground' variant='outline'>
          No tags
        </Badge>
      )}
    </div>
  )
}
