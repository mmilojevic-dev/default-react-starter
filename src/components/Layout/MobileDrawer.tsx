import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Logo,
  Navigation
} from '@/components'

type MobileDrawerProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileDrawer = ({ isOpen, setIsOpen }: MobileDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <DrawerHeader className="h-16 justify-center bg-background/50 px-4">
          <Logo withTitle />
        </DrawerHeader>
        <DrawerBody>
          <Navigation />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
