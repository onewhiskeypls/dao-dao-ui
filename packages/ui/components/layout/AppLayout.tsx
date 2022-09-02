import { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Navigation, NavigationProps } from './Navigation'

export interface AppLayoutProps {
  navigationProps: NavigationProps
  children: ReactNode
  wallet: ReactNode
  rightSidebar: ReactNode
}

export const AppLayout = ({
  navigationProps,
  children,
  wallet,
  rightSidebar,
}: AppLayoutProps) => (
  <div className="flex flex-row items-stretch w-full h-full">
    <div className="shrink-0 w-[264px]">
      <Navigation {...navigationProps} />
    </div>

    <main className="overflow-y-auto grow pb-6 border-x border-border-base">
      {children}
    </main>

    <div className="flex flex-col shrink-0 items-stretch p-6 pt-0 w-96">
      {wallet}

      <div className="mt-2">{rightSidebar}</div>

      <div className="mt-7">
        <Footer />
      </div>
    </div>
  </div>
)