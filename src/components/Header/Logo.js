

const Logo = ({style}) => {
  return <img style={{
    height: 40,
    ...style,
  }} src={require("./../../assets/logo.png")}  alt="Logo"/>
}

export default Logo