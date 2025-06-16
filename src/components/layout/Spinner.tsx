import SPINNER from '../../assets/spinner.gif'

export const Spinner = () => {
  return (
    <div className="w-100 mt-20">
        <img 
        width={180} 
        className="test-center mx-auto"
        src={SPINNER}
        alt="loading..." />
    </div>
  )
}
