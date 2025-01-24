import {DNA} from 'react-loader-spinner'

export const LoadingMessage = () => {
  return (
    <div>
          <DNA
              visible={true}
              height="200"
              width="210"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
          />
    </div>
  )
}

