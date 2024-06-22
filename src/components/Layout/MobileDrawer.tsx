import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Logo,
  Navigation
} from '@/components'
import { withSuspense } from '@/hoc'

type MobileDrawerProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileDrawer = ({ isOpen, setIsOpen }: MobileDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <DrawerHeader className="bg-background/50 h-16 justify-center px-4">
          <Logo withTitle />
        </DrawerHeader>
        <DrawerBody>
          <Navigation />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default withSuspense(MobileDrawer)
