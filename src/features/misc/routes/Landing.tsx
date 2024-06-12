import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button, Logo } from '@/components'
import { appDefaultConfig, landingConfig, routesConfig } from '@/config'

export const Landing = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div
        className="flex max-w-7xl flex-col items-center justify-center gap-5 px-4 py-12 text-center
          sm:px-6 lg:px-8 lg:py-16"
      >
        <Logo size={10} />
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          <span className="block">{appDefaultConfig.title}</span>
        </h1>
        <p>{appDefaultConfig.description}</p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md">
            <Button>
              <HomeIcon className="mr-2 size-4" />
              <Link to={routesConfig.protected.app.path}>
                {landingConfig.actionButtonLabel}
              </Link>
            </Button>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href={landingConfig.projectRepoLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link">
                <GitHubLogoIcon className="mr-2 size-4" />
                <span>{landingConfig.projectRepoLabel}</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
