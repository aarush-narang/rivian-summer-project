/* eslint-disable react/no-danger */
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function MetaTags({
    title,
    description,
    url,
    image,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />

            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content="@aarush" />

            <meta name="theme-color" content="#000000" />
            <link type="application/xml" href="/sitemap.xml" />

            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-46N8RCD9HT" />

            <script dangerouslySetInnerHTML={{
                html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-46N8RCD9HT');`,
            }}
            />
        </Head>
    );
}

MetaTags.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
