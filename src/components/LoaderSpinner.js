import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderSpinner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#2C3227"
      height={100}
      width={100} />
  )
}

export default LoaderSpinner