import { ContentLayout } from '@/components/Layout/ContentLayout'
import { aboutConfig } from '@/config'
import { withSuspense } from '@/hoc/withSuspense'

const About = () => {
  const { title, content } = aboutConfig
  return (
    <ContentLayout title={title}>
      <ul className="flex max-w-2xl flex-col gap-y-5">
        {Object.keys(content).map((infoTitle: string) => {
          const infoText = content[infoTitle as keyof typeof content]
          return (
            <li key={infoTitle}>
              <div className="font-bold">{infoTitle}</div>
              <div>{infoText}</div>
            </li>
          )
        })}
      </ul>
    </ContentLayout>
  )
}

export default withSuspense(About)
