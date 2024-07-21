// import React, { useEffect, useRef, useState } from 'react'
// import './Home.module.css'

// const Home = () =>
// { 

//  let [rows ,setrows] = useState([])
//     let taskname = useRef()
//     let taskDetails = useRef()
//     let taskBtn = useRef()
//     let compeletetask = useRef()
//     let [id ,setid] = useState(null)

//     let [mark ,setmakr] = useState('true')


//     let d = new Date(Date.now());
//     let day = d.getDate();
//     let month = d.getMonth() + 1;
//     let hours = d.getHours();
//     let mins = d.getMinutes();
//     let seconds = d.getSeconds();
    
//     let formattedDate = `${day}/${month} ${hours}:${mins}:${seconds}`;
    
 
  
//     let updaterow = (id)=>
//     { 
     
//       let newrows = rows.map((row , index)=>
//       {
       
        
//         if(index==id)
//         {
//           console.log(index , id);
//           console.log(taskname.current.value);
//           row.name=taskname.current.value
//           row.details=taskDetails.current.value
//         }
//         return row
//       })
//       setrows(newrows)
//       localStorage.setItem('Data', JSON.stringify(newrows));
//       taskname.current.value=''
//       taskDetails.current.value=''
//       taskBtn.current.innerHTML="Add Task"
//     }

// useEffect(()=>
// {

//   if(localStorage.getItem('Data'))
//   {
//     setrows (JSON.parse(localStorage.getItem('Data')))

    
//   }
//   else
//   {
//     localStorage.setItem('Data',JSON.stringify(rows))
//   }

// },[])

//   return<>
//     <h1 className='text-center mt-5 lighty'>Task Tracker</h1>
//    <form onSubmit={(e)=>
//     {
//       e.preventDefault()
//      if(!taskname.current.value=='' && !taskDetails.current.value=='')
//      {
//       if(taskBtn.current.innerHTML=="Update")
//       {
//         taskBtn.current.innerHTML="Add Task"
//         updaterow(id)
//         taskname.current.value=''
//         taskDetails.current.value=''
        
        
//       }
//        else if (taskBtn.current.innerHTML="Add Task")
//       {
//         let task = {name:taskname.current.value, details:taskDetails.current.value , formattedDate , donetask:'false'}
//         const updatedRows = [...rows, task];
//         setrows(updatedRows);
//         localStorage.setItem('Data', JSON.stringify(updatedRows));
       
//        console.log(JSON.parse(localStorage.getItem('Data')));
//          taskname.current.value=''
//         taskDetails.current.value=''
//       }
//      }
     
//     }} className='w-25 mx-auto mt-5'>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class=" form-label text-info">Task Name</label>
//     <input required ref={taskname} type="text" class="form-control" placeholder='Name Ur Taks' id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
//   <div class="mb-3">
//     <label  for="exampleInputEmail1" class="form-label text-info">Task Dic</label>
//     <input required ref={taskDetails} type="text" placeholder=' Details For Ur Task' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
 
 

//   <div className='text-center'>
//   <button ref={taskBtn} type="submit" class="btn btn-dark px-3 py-2 mt-2">Add Task</button>
//   </div>
// </form>
// <table class="table text-center table-dark table-striped table-hover container  mt-5">
//   <thead>
//     <tr>
//       <th scope="col">#ID</th>
//       <th scope="col">Name</th>
//       <th scope="col">Details</th>
//       <th scope="col">Date</th>
//       <th scope="col">Update</th>
//       <th scope="col">Delete</th>
//       <th scope="col">Done</th>
     
//     </tr>
  
    
//   </thead>
//   <tbody ref={compeletetask}>
//  {localStorage.getItem("Data") == "[]"?<tr>
//     <td colSpan={7}><h1>U Dont Have Tasks</h1></td>
  
//     </tr>:null}
//   {rows.map((item,index)=>
//   {return <tr className='align-middle position-relative'>
//     <td scope="row">{index+1}</td>
//     <td>{item.name}</td>
//     <td>{item.details}</td>
//     <td>{item.formattedDate}</td>
//     <td> <button type="submit" class="btn btn-outline-info  " onClick={()=>
//       {
     
        
//         taskBtn.current.innerHTML="Update"
//         taskname.current.value=item.name
//         taskDetails.current.value=item.details
//         setid(index)
        
        
        
        
        
//       }} >Update Task</button></td>
//     <td> <button  onClick={()=>
//       {
        
//         const updatedRows = rows.filter((_,i)=>i!==index);
//         localStorage.setItem('Data', JSON.stringify(updatedRows));
//         setrows(updatedRows);
//         console.log(localStorage.getItem('Data'));
        
        
//       }} type="submit" class="btn btn-outline-danger">Delete Task</button></td>
//     <td> <button onClick={(e)=>
//       {
//         console.log(e.target.innerHTML);
//        if(e.target.innerHTML == 'Done Task')
//        {
//         e.target.innerHTML = 'UnDo Tesk'
//         compeletetask.current.children[index].children[6].children[1].classList.remove('d-none')
//         compeletetask.current.children[index].children[4].children[0].setAttribute("disabled", "disabled")
//         item.donetask = 'true'
//          setrows(rows)
//         localStorage.setItem('Data', JSON.stringify(rows));

        
//        }
//        else
//        {
//         e.target.innerHTML = 'Done Task'
//         compeletetask.current.children[index].children[6].children[1].classList.add('d-none')
//         compeletetask.current.children[index].children[4].children[0].removeAttribute("disabled")
//          item.donetask = 'false'
//          setrows(rows)
//         localStorage.setItem('Data', JSON.stringify(rows));
//        }
       
//       }} type="submit" class="btn btn-outline-success">Done Task</button>
//       {item.donetask == 'false'?<div className='line bg-info d-none'></div>:<div className='line bg-info'></div>}
//       {console.log(compeletetask.current)}
//       {/* {item.donetask =='false'? compeletetask.current.children[index].children[4].children[0].removeAttribute("disabled"):compeletetask.current.children[index].children[4].children[0].setAttribute("disabled", "disabled")} */}
//       </td>
     
//   </tr>
//   })}
   
//   </tbody>
// </table>

//   </>
// }

// export default Home


import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [rows, setRows] = useState([]);
  const taskName = useRef();
  const taskDetails = useRef();
  const taskBtn = useRef();
  const completeTask = useRef();
  const [id, setId] = useState(null);
  const [mark, setMark] = useState('true');

  const formattedDate = new Date().toLocaleString();

  const updateRow = (id) => {
    const newRows = rows.map((row, index) => {
      if (index === id) {
        row.name = taskName.current.value;
        row.details = taskDetails.current.value;
      }
      return row;
    });
    setRows(newRows);
    localStorage.setItem('Data', JSON.stringify(newRows));
    taskName.current.value = '';
    taskDetails.current.value = '';
    taskBtn.current.innerHTML = 'Add Task';
  };

  useEffect(() => {
    const data = localStorage.getItem('Data');
    if (data) {
      setRows(JSON.parse(data));
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskName.current.value && taskDetails.current.value) {
      if (taskBtn.current.innerHTML === 'Update') {
        updateRow(id);
      } else {
        const newTask = {
          name: taskName.current.value,
          details: taskDetails.current.value,
          formattedDate,
          doneTask: 'false'
        };
        const updatedRows = [...rows, newTask];
        setRows(updatedRows);
        localStorage.setItem('Data', JSON.stringify(updatedRows));
        taskName.current.value = '';
        taskDetails.current.value = '';
      }
    }
  };

  const handleUpdateClick = (index) => {
    taskBtn.current.innerHTML = 'Update';
    taskName.current.value = rows[index].name;
    taskDetails.current.value = rows[index].details;
    setId(index);
  };

  const handleDeleteClick = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
    localStorage.setItem('Data', JSON.stringify(updatedRows));
  };

  const handleDoneClick = (index) => {
    const newRows = [...rows];
    const item = newRows[index];
    item.doneTask = item.doneTask === 'false' ? 'true' : 'false';
    setRows(newRows);
    localStorage.setItem('Data', JSON.stringify(newRows));
  };

  return (
    <div>
      <h1 className='text-center mt-5 lighty'>Task Tracker</h1>
      <form onSubmit={handleFormSubmit} className='w-25 mx-auto mt-5'>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label text-info">Task Name</label>
          <input required ref={taskName} type="text" className="form-control" placeholder='Name Your Task' id="taskName" />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDetails" className="form-label text-info">Task Description</label>
          <input required ref={taskDetails} type="text" className="form-control" placeholder='Details for Your Task' id="taskDetails" />
        </div>
        <div className='text-center'>
          <button ref={taskBtn} type="submit" className="btn btn-dark px-3 py-2 mt-2">Add Task</button>
        </div>
      </form>
      <table className="table text-center table-dark table-striped table-hover container mt-5">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Date</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody ref={completeTask}>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={7}><h1>You Don't Have Tasks</h1></td>
            </tr>
          ) : (
            rows.map((item, index) => (
              <tr key={index} className='align-middle position-relative'>
                <td scope="row">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.formattedDate}</td>
                <td>
                  <button className="btn btn-outline-info" onClick={() => handleUpdateClick(index)}>Update Task</button>
                </td>
                <td>
                  <button className="btn btn-outline-danger" onClick={() => handleDeleteClick(index)}>Delete Task</button>
                </td>
                <td>
                  <button className="btn btn-outline-success" onClick={() => handleDoneClick(index)}>
                    {item.doneTask === 'false' ? 'Done Task' : 'Undo Task'}
                  </button>
                  <div className={item.doneTask === 'false' ? 'line bg-info d-none' : 'line bg-info'}></div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
