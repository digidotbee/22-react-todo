import PropTypes from 'prop-types'
  
  const Header = ({title}) => {

    const onClick = () => {
        console.log('Click')
    }

 
      return (
          <header className='header'>
               <h1> {title} </h1>
          </header>
      )
  }

  Header.defaultProps = {
      title: "todos",
  }

//   Header.propTypes = {
//       title: PropTypes.string.isRequired,
//   }

// CSS in JSX
//   const headingStyle = {
//       color: 'red',
//   }
  
  export default Header