

const Logo = ({style}) => {
  return <img style={{
    height: 40,
    ...style,
  }} src={require("./../../assets/logo-2x.png")}  alt="Logo"/>
}

export default Logo