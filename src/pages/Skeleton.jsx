import Header from '../molecules/Header/Header';

const Skeleton = ({ children, toggleTheme, theme }) => {

  return (
    <div className='App'>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      { children }
    </div>
  )
}

export default Skeleton;
