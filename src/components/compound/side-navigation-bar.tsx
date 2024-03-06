export const SideNavigationBar: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  return (
    <aside
      className="flex flex-row-reverse items-center gap-x-5 border-b p-4 text-center
        md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-8 md:block md:border-b-0
        md:border-r"
    >
      {children}
    </aside>
  )
}
