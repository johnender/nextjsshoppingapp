import React from 'react'

const pagesList = [
  {
    name: 'HOME',
    link: '#'
  },
  {
    name: 'CATEGORIES',
    link: '#'
  },
  {
    name: `MEN'S`,
    link: '#'
  },
  {
    name: `WOMEN'S`,
    link: '#'
  },,
  {
    name: 'JEWELRY',
    link: '#'
  },,
  {
    name: 'PERFUME',
    link: '#'
  },,
  {
    name: 'BLOG',
    link: '#'
  },,
  {
    name: 'HOT OFFERS',
    link: '#'
  },
]
const NavBar = () => {
  return (
    <nav className='hidden lg:block'>
      <div className='container mx-auto'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-(--blackish)'>
          {pagesList.map((ent, index) => {
            return(
              <a key={index} href={ent.link} className='navbar_link relative cursor-pointer'>{ent.name}</a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar