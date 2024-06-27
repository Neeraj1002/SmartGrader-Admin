//Third Party Import
import React from 'react'

import { CiSearch } from 'react-icons/ci'

//Local Import
import { Button, TextField } from '@mui/material'


export interface SearchProps {
  value: string
  onChange: (val: string) => void
}

const Search: React.FC<SearchProps> = ({ value, onChange }: SearchProps) => {
  const onChangeData = (value: string) => {
    onChange(value)
  }

  return (
    <div className='px-3 sm:flex sm:gap-5'>
      <div className='sm:w-2/5'>
        <TextField
          size="small"
          type='text'
          className='w-full bg-slate-50 border-slate-50'
          placeholder='Search...'
          id='search-options'
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeData(e.target.value)
          }}
        />
      </div>
      <div>
      <Button className='button sm:w-auto' variant='contained' type='submit' endIcon={<CiSearch />}>
        Search
      </Button>
      </div>
      
    </div>
  )
}

export default Search
