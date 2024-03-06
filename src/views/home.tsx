import { HOME } from '@/config'

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-5xl">{HOME.TITLE}</h1>
    </div>
  )
}
