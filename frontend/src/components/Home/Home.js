import React, { Component } from 'react'

import { map } from 'underscore'

import './Home.scss'

import Header from '../Header/Header'

import { ReactComponent as User } from '../../images/user.svg'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Nurse } from '../../images/nurse.svg'
import { ReactComponent as Responsive } from '../../images/responsive.svg'
import { ReactComponent as Clients } from '../../images/clients.svg'
import { ReactComponent as Messages } from '../../images/messages.svg'
import { ReactComponent as Broadcast } from '../../images/broadcast.svg'
import { ReactComponent as Employees } from '../../images/employees.svg'
import { ReactComponent as Appointment } from '../../images/appointment.svg'

const TITLE = 'Спартак +7 908 636 2742'

const SECTIONS = [
    { name: 'Видеокамера DS-2CD2122FWD-I', href: '/DS-2CD2122FWD-I', Icon: Appointment, id : '000001', description : 'Купольная камера видеонаблюдения', price : '2345,33', count : '1', brands : 'Hikvision'},
    { name: 'Видеокамера DS-2CD2122FWD-I', href: '/DS-2CD2122FWD-I', Icon: Appointment, id : '000001', description : 'Купольная камера видеонаблюдения', price : '2345,33', count : '1', brands : 'Hikvision'},
    { name: 'Видеокамера DS-2CD2122FWD-I', href: '/DS-2CD2122FWD-I', Icon: Appointment, id : '000001', description : 'Купольная камера видеонаблюдения', price : '2345,33', count : '1', brands : 'Hikvision'}
]

export default class Home extends Component {

  render () {
    return (
      <div className='Home'>
        <Header
          title={TITLE}
          userName='Иванов Иван Иванович'
          className='Home-Header'
          renderIcon={() => (
            <Responsive className='Header-Icon'/>
          )}
        />
        <div className='Home-Body'>
          <div className='SectionNavigation'>
            {map(SECTIONS, ({ name, href, Icon, id, description,  price, count, brands}) => (
              <a className='SectionNavigation-Item Section' href='#'>
                <Icon className='Section-Icon'/>
                <span className='Section-Title'>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}