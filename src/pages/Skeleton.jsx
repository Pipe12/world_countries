import Header from '../molecules/Header';

const Skeleton = ({ children, toggleTheme }) => {

  return (
    <div className='App'>
      <Header toggleTheme={toggleTheme}/>
      { children }
    </div>
  )
}

export default Skeleton;
