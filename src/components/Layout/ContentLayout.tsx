import * as React from 'react'

type ContentLayoutProps = {
  children: React.ReactNode
  title: string
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="py-6">
        <div className="mx-auto mb-4 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-foreground/70 text-2xl font-semibold">{title}</h1>
        </div>
        <div className="mx-auto max-w-7xl p-4 sm:p-6 md:p-8">{children}</div>
      </div>
    </>
  )
}
