import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Todo as TodoType} from '../types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import {useState} from 'react';

type TodoCardProps = {
  todo: TodoType;
  onStatusChange: (todo: TodoType) => void;
};

export const TodoCard = ({todo, onStatusChange}: TodoCardProps) => {
  const [status, setStatus] = useState<TodoType['status']>(todo.status);

  const handleStatusChange = (event: SelectChangeEvent<TodoType['status']>) => {
    let newStatus = event.target.value as TodoType['status'];
    setStatus(newStatus);
    onStatusChange({
      ...todo,
      status: newStatus,
    });
  };

  return <Card sx={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1}}>
    <Typography component="h3" variant="h5">
      {todo.title}
    </Typography>
    <Divider sx={{flex: 1}} />
    <Typography component="p">
      {todo.description}
    </Typography>
    <FormControl sx={{alignSelf: 'end'}}>
      <InputLabel>Status</InputLabel>
      <Select value={status} label="Status" onChange={handleStatusChange}>
        <MenuItem value={'todo'}>To do</MenuItem>
        <MenuItem value={'doing'}>Doing</MenuItem>
        <MenuItem value={'done'}>Done</MenuItem>
      </Select>
    </FormControl>

  </Card>;
};