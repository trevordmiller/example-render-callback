import React from 'react'
import Accordian from '../components/Accordian'
import Modal from '../components/Modal'
import Thumbnail from '../components/Thumbnail'

const exampleImageUrl = 'https://unsplash.it/1000'

const ExampleDetails = () => (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
)

const App = () => (
  <main>

    <p>Each of these examples uses the <code>Toggle</code> Render Callback component:</p>

    <section>
      <h1>Accordian</h1>
      <Accordian
        title='Tap to toggle Accordian expansion'
        details={<ExampleDetails />}
      />
    </section>
    
    <section>
      <h1>Modal</h1>
      <Modal
        teaser={<button>Tap to toggle Modal showing</button>}
        details={<ExampleDetails />}
      />
    </section>

    <section>
      <h1>Thumbnail</h1>
      <p>Tap image to toggle thumbnail zoom</p>
      <Thumbnail
        src={exampleImageUrl}
        alt='Lorem ipsum'
      />
    </section>

  </main>
)

export default App
