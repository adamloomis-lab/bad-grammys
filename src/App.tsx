import { useEffect } from 'react'
import { Route, Switch, Router, useLocation } from 'wouter'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import CookieNotice from './components/CookieNotice'
import { useScrollReveal } from './hooks/useScrollReveal'
import Home from './pages/Home'
import WhatWeOffer from './pages/WhatWeOffer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'

function Shell() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useScrollReveal(location)

  return (
    <>
      <Seo path={location} />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/what-we-offer" component={WhatWeOffer} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/accessibility" component={Accessibility} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileCallBar />
      <CookieNotice />
    </>
  )
}

export default function App({ ssrPath }: { readonly ssrPath?: string }) {
  return (
    <Router ssrPath={ssrPath}>
      <Shell />
    </Router>
  )
}
