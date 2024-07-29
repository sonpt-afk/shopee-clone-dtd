import Footer from 'src/pages/components/Footer'
import RegisterHeader from 'src/pages/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer></Footer>
    </div>
  )
}
