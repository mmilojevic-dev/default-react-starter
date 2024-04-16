import { ContentLayout } from '@/components'
import { ABOUT } from '@/config'

export const About = () => {
  const { TITLE, CONTENT } = ABOUT
  return (
    <ContentLayout title={TITLE}>
      <ul className="flex max-w-2xl flex-col gap-y-5">
        {Object.keys(CONTENT).map((infoTitle: string) => {
          const infoText = CONTENT[infoTitle as keyof typeof CONTENT]
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
