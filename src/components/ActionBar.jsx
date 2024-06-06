import React from 'react'
import { Stack, TextField, Typography } from '@mui/material'

export default function ActionBar() {
  return (
    <div className='action-bar'>
        <Stack direction="row" spacing={2}>
            <Typography variant='h6'>Purchase Orders</Typography>
            <TextField sx={{ width: '25ch' }} id="outlined-basic" label="Type of Search" defaultValue="PO Amt." variant="outlined" size="small" />
            <TextField sx={{ width: '25ch' }} id="filled-basic" label="PO Amt." variant="outlined" size="small" />
        </Stack>
    </div>
  )
}
