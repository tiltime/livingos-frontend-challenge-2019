import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

//import css
import '../css/reset.css'
import '../css/styles.css'

class MyApp extends App {
    constructor (props) {
        super(props)
        this.persistor = persistStore(props.reduxStore)
    }

    render () {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <PersistGate
                        loading={<Component {...pageProps} />}
                        persistor={this.persistor}
                    >
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)
