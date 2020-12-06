/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app'
import '../styles/main.css'
import '../styles/utility.css'
import '../styles/icomoon.css'

class Application extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
export default Application
