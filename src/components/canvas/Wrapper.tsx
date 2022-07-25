import useStore from '@/helpers/store'
import DynaModel from './Shader/DynaModel'

const Wrapper = () => {
  const mType = useStore((state) => state.mType)
  return <DynaModel mtype={mType} />
}
export default Wrapper
