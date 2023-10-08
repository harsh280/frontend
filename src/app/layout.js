import './globals.css'
import  {UserProvider} from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
