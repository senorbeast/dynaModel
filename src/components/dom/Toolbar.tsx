import useStore from '@/helpers/store'

const Toolbar = () => {
  const setmType = useStore((store) => store.setmType)
  return (
    <div className='absolute top-0 right-0 flex mt-8 mr-8 gap-3'>
      <button
        type='button'
        className='button'
        onClick={() => setmType('Camera')}
      >
        Camera
      </button>
      <button
        type='button'
        className='button'
        onClick={() => setmType('Default')}
      >
        Default
      </button>
    </div>
  )
}

export default Toolbar
