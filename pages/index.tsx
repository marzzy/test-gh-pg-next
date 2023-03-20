import Link from 'next/link'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <br />
      <br />
      <br />
      <br />
      <span>
        Test the MUI: 
      </span>
      <br />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  )
}
