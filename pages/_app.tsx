import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
  library.add(
    faGithub, faTwitter
  );
  return <Component {...pageProps} />
}
