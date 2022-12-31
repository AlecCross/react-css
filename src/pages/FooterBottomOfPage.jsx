import React from 'react'
import BackToMain from '../components/BackToMain'
import flexboxFooter from '../css-modules/flex/flexboxFooter.module.css'

export default function FooterBottomOfPage() {
    return <>

        <br />
        <div className={flexboxFooter.wrapper}>
            <header className={flexboxFooter.header}>
                <BackToMain />
                Header
            </header>
            <main className={flexboxFooter.main}>
                Main
                <p>
                    <p>html code:</p>
                    {`
                        <div className={flexboxFooter.wrapper}>
                            <header className={flexboxFooter.header}>
                                <BackToMain />
                                Header
                            </header>
                            <main className={flexboxFooter.main}>
                                Main
                            </main>
                            <footer className={flexboxFooter.footer}>
                                Footer
                            </footer>
                        </div>`
                    }
                    <br />
                    <p>css code:</p>
                    {
                        `
                        .wrapper {
                            min-height: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .header {
                            background-color: #009ef3;
                            padding: 15px;
                            text-align: center
                        }
                        
                        
                        .main {
                            flex: 1 1 auto;
                            padding: 15px;
                            text-align: center;
                        }
                        
                        
                        .footer {
                            background-color: #ff7b50;
                            padding: 15px;
                            text-align: center
                        }
                        `
                    }
                </p>
            </main>
            <footer className={flexboxFooter.footer}>
                Footer
            </footer>
        </div>
    </>
}
