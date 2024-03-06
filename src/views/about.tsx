import { ABOUT } from '@/config'

export const About: React.FC = () => {
  return (
    <div className="flex justify-center text-center">
      <ul className="flex max-w-2xl flex-col gap-y-5">
        {Object.keys(ABOUT).map((infoTitle: string) => {
          const infoText = ABOUT[infoTitle as keyof typeof ABOUT]
          return (
            <li key={infoTitle}>
              <div className="font-bold">{infoTitle}</div>
              <div>{infoText}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
