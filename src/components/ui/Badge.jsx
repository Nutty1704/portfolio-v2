

const Badge = ({ children, containerClass }) => {
  return (
    <div className={`border-2 border-gray-100 font-semibold px-3 inline-flex items-center rounded-full w-fit ${containerClass}`}>
      { children }
    </div>
  )
}

export default Badge