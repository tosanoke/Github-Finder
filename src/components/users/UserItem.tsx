import {Link} from 'react-router-dom'
import {UserProps} from '../../types'

interface User {
   user: UserProps
   key: number
}

export const UserItem = ({user: {login, avatar_url, html_url, repos_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, events_url, received_events_url, type, site_admin}}: User) => {
   return (
      <div className='card shadow-md compact side bg-base-100'>
         <div className='flex-row items-center space-x-4 card-body'>
            <div>
               <div className='avatar'>
                  <div className='rounded-full shadow w-14 h-14'>
                     <img src={avatar_url} alt='Profile' />
                  </div>
               </div>
            </div>
            <div>
               <a className='text-base-content text-opacity-80' href={html_url} target='_blank' rel='noopener noreferrer'>
                  Visit Profile
               </a>
            </div>
         </div>
      </div>
   )
}
