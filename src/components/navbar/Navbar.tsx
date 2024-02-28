import React from 'react'
import { Links } from './Links'

export const Navbar = () => {
  return (
    <div>
      <div>Fabblog</div>
      <div className="bg-slate-500">
        <Links />
      </div>
    </div>
  )
}
