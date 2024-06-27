'use client'

//React Third Party Lib Imports
import Link from 'next/link'

import { FaEye } from 'react-icons/fa6'
import { MdDelete, MdEdit } from 'react-icons/md'
import { IconContext } from 'react-icons'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'
import { UserDataType } from '@/types/pages/tableBodyRowType'

interface TableProps {
  TableData: UserDataType[]
  page: string
}

const Table: React.FC<TableProps> = ({ TableData, page }) => {
  const PageName = page.charAt(0).toUpperCase() + page.slice(1)

  return (
    <div className='overflow-x-auto'>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((row, index) => (
            <tr key={index}>
              <td className='!plb-1'>
                <div className='flex items-center gap-3'>
                  <div className='flex flex-col'>
                    <Typography color='text.primary' className='font-medium'>
                      {row.name}
                    </Typography>
                    <Typography variant='body2'>{row.username}</Typography>
                  </div>
                </div>
              </td>
              <td className='!plb-1'>
                <Typography>{row.email}</Typography>
              </td>
              <td className='!plb-1'>
                <div className='flex gap-2'>
                  <Typography color='text.primary'>{row.role}</Typography>
                </div>
              </td>
              <td className='!pb-1'>
                <Chip
                  className='capitalize'
                  variant='tonal'
                  color={row.isVerified === false ? 'secondary' : 'success'}
                  label={row.isVerified ? 'Verified' : 'Not Verified'}
                  size='small'
                />
              </td>
              <td className='!pb-1 flex gap-1'>
                <Link href={`/${page}s/view`} title={`Click here to View ${PageName}`}>
                  <IconContext.Provider value={{ color: '#0ea5e9' }}>
                    <FaEye />
                  </IconContext.Provider>
                </Link>
                <Link href={`/${page}s/edit`} title={`Click here to Edit ${PageName}`}>
                  <IconContext.Provider value={{ color: '#0ea5e9' }}>
                    {' '}
                    <MdEdit />
                  </IconContext.Provider>
                </Link>
                <Link href='#' title={`Click here to Delete ${PageName}`}>
                  <IconContext.Provider value={{ color: '#0ea5e9' }}>
                    <MdDelete />
                  </IconContext.Provider>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
