import Head from 'next/head'
import {SITE_TITLE, SITE_DESCRIPTIONS} from '../../constants/config'

export default function Meta(props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{SITE_TITLE}</title>
                <meta name="Description" content={SITE_DESCRIPTIONS}></meta>
            </Head>
        </>
    )
}