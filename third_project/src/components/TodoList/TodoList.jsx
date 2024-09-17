import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';



function TodoList() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [taskId, setTaskId] = useState(1);


  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if(task.trim() !== '') {
      setTasksList([...tasksList, {
        id: taskId,
        text: task,
      }
      ]);
      setTaskId((id) => taskId + 1)
      setTask('');
    }
  };
  const removeTask = (id) => {
    setTasksList(tasksList => tasksList.filter((task) => task.id !== id));
  };

  return (
      <div>
        <div>
          <h1 className="title">Список задач</h1>
          <TextField
              label="Введите новую задачу"
              variant="outlined"
              fullWidth
              margin="normal"
              value={task}
              onChange={handleInputChange}
          ></TextField>
          <div className="button">
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
                style={{margin: 10}}
            >Добавить задачу
            </Button>
          </div>
        </div>
        <Box className='box'>
          {tasksList.map((task) => (
                  <Card className="card"
                        variant="outlined"
                        key={task.id}
                        style={{margin: 10}}
                  >
                    <CardContent>
                      <Typography
                          sx={{ fontSize: 16 }}
                          color="text.secondary"
                          gutterBottom
                      >
                        {task.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                          aria-label="delete"
                          onClick={() => removeTask(task.id)}> <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
              ))}
        </Box>
      </div>
  );

}

export default TodoList;