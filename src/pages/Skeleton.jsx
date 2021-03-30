import Header from '../molecules/Header';

const Skeleton = ({ children }) => {

  return (
    <div className='App'>
      <Header />
      { children }
    </div>
  )
}

export default Skeleton;
