//React Import
import { FiUsers } from 'react-icons/fi'

//Next Import
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <div className='flex gap-5'>
            {<FiUsers color='#0ea5e9' size={70} />}
            <Typography variant='h5'>Total Number of Users</Typography>
          </div>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            100
          </Typography>
        </div>
        <Button size='small' variant='contained' className='absolute inline-end-7 bottom-6'>
          <Link href='/users'>View Users</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Award
