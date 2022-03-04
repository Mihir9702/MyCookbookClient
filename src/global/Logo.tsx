import React, { FC } from 'react'
import logo from 'public/logo.svg'
import './global.scss'

const Logo: FC = () => {
	return <img className="logo" src={logo} alt="logo" />
}

export default Logo
