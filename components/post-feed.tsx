'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FeedTab } from '@/types'
import { useEffect, useState } from 'react'

interface PostFeedProps {
  tabList: FeedTab[]
  children: React.ReactNode
}
export default function PostFeed({ tabList, children }: PostFeedProps) {
  // It is so weird to use Radix UI's tabs component...
  const [value, setValue] = useState('global')
  useEffect(() => {
    setValue('global')
  }, [])

  return (
    <Tabs defaultValue={tabList[0].value}>
      <TabsList>
        {tabList.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={tabList[0].value}>{children}</TabsContent>
    </Tabs>
  )
}
