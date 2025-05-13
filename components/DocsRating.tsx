'use client'

import { Rate } from '@/components/ui/feedback';
import posthog from 'posthog-js'

export function DocsRating() {
  return (
    <Rate
      onRateAction={async (url, feedback) => {
        posthog.capture('on_rate_docs', { url, ...feedback })
      }}
    />
  )
}
