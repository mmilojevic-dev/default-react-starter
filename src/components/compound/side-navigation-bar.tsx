export const SideNavigationBar: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  return (
    <aside className="p-4 text-center md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-8">
      {children}
    </aside>
  )
}
