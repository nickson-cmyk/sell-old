import * as React from 'react';
import Button from '@mui/material/Button';


export default function BasicButton(props){
    return (
          <Button onClick={(e)=>props.onClick(e)} name={props.name} style={{fontSize: "medium",fontWeight: "400"}} color='secondary' variant="text">{props.name}</Button>
      );
}